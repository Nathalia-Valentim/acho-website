import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component,  OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { ResultComponent } from '../result/result.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [FormsModule, GoogleMapsModule, CommonModule, ResultComponent],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})

export class MapsComponent implements OnInit, AfterViewInit {
  private map!: google.maps.Map;
  private autocomplete!: google.maps.places.Autocomplete;
  private marker!: google.maps.Marker;
  private infowindow!: google.maps.InfoWindow;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
   
    if (isPlatformBrowser(this.platformId)) {
      if (!window['google']) {
        this.loadGoogleMapsApi();
      } else {
        this.initializeMapAndAutocomplete();
      }
    }
  }

  ngAfterViewInit(): void {
    
    if (isPlatformBrowser(this.platformId)) {
      if (window['google']) {
        this.initializeMapAndAutocomplete();
      }
    }
  }

  private loadGoogleMapsApi(): void {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCKsrv0hold9CZ7a1CIfmNnicRpnSJIrp4&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
          this.initializeMapAndAutocomplete();
      };
      document.body.appendChild(script);
  }

  private initializeMapAndAutocomplete(): void {
      this.initializeMap();
      this.initializeAutocomplete();
  }

  private initializeMap(): void {
      const mapOptions: google.maps.MapOptions = {
          center: { lat: -23.55052, lng: -46.633308 },
          zoom: 12,
          mapTypeControl: false,
      };

      this.map = new google.maps.Map(
          document.getElementById('map') as HTMLElement,
          mapOptions
      );

      this.marker = new google.maps.Marker({
          map: this.map,
      });

      this.infowindow = new google.maps.InfoWindow();
  }

  private initializeAutocomplete(): void {
      const input = document.getElementById('autocomplete') as HTMLInputElement;

      this.autocomplete = new google.maps.places.Autocomplete(input, {
          fields: ['name', 'geometry', 'formatted_address'],
      });

      this.autocomplete.addListener('place_changed', () => {
          const place = this.autocomplete.getPlace();

          if (!place.geometry || !place.geometry.location) {
              window.alert('Local não encontrado! Tente novamente.');
              return;
          }

         
          this.map.setCenter(place.geometry.location);
          this.map.setZoom(15);

          this.marker.setPosition(place.geometry.location);
          this.infowindow.setContent(`
              <strong>${place.name}</strong><br>
              <span>${place.formatted_address}</span>
          `);
          this.infowindow.open(this.map, this.marker);
      });
  }

  showResults: boolean = false;
}
