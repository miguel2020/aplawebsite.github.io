import { Component, OnInit } 		from '@angular/core';
import { Location } 				from '@angular/common';
import { HttpClient } 				from '@angular/common/http';
import { Router } 					from '@angular/router';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
	zoom: number = 3;
	lat: number = 44.5719866;
	lng: number = 52.202442;
	map: any;
	styles: any;
	links: any;
	GetYear: number;
	
	constructor(
		private http: HttpClient,
		private location: Location,
		private router: Router
	) {
		router.events.subscribe((val) => {
			if (location.path() === "/about") {
				this.map = true;
			} else {
				this.map = false;
			}
		});
	}
	
	markers: marker[] = [
		{
			lat: 25.1219938,
			lng: 55.2185612,
			info: '17 B Street, Al Quoz Industrial Area 3',
			iconUrl: '/assets/images/map-marker.svg',
			draggable: false
		},
		{
			lat: 49.6247525,
			lng: 6.1471225,
			info: '14 Rue Erasme, 1468 Luxembourg',
			iconUrl: '/assets/images/map-marker.svg',
			draggable: false
		},
		{
			lat: 55.7588308,
			lng: 37.6095729,
			info: 'Tverskaya 7',
			iconUrl: '/assets/images/map-marker.svg',
			draggable: false
		},
		{
			lat: 17.7878397,
			lng: 83.3714079,
			info: 'FinTech Tower Vizag 2nd Floor, Sunrise Incubation Hub, Visakhapatnam',
			iconUrl: '/assets/images/map-marker.svg',
			draggable: false
		}
	]

	ngOnInit() {
		let now = new Date();
		let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		this.styles = [{"elementType": "geometry", "stylers": [{"color": "#212121"}]},{"elementType": "labels.icon", "stylers": [{"visibility": "off"}]},{"elementType": "labels.text.fill", "stylers": [{"color": "#757575"}]},{"elementType": "labels.text.stroke", "stylers": [{"color": "#212121"}]},{"featureType": "administrative", "elementType": "geometry", "stylers": [{"color": "#757575"}]},{"featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"}]},{"featureType": "administrative.land_parcel", "stylers": [{"visibility": "off"}]},{"featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{"color": "#bdbdbd"}]},{"featureType": "administrative.neighborhood", "stylers": [{"visibility": "off"}]},{"featureType": "poi", "elementType": "labels.text", "stylers": [{"visibility": "off"}]},{"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"}]},{"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#181818"}]},{"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"}]},{"featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [{"color": "#1b1b1b"}]},{"featureType": "road", "elementType": "geometry.fill", "stylers": [{"color": "#2c2c2c"}]},{"featureType": "road", "elementType": "labels", "stylers": [{"visibility": "off"}]},{"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"color": "#8a8a8a"}]},{"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#373737"}]},{"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#3c3c3c"}]},{"featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{"color": "#4e4e4e"}]},{"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"}]},{"featureType": "transit", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"}]},{"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000000"}]},{"featureType": "water", "elementType": "labels.text", "stylers": [{"visibility": "off"}]},{"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#3d3d3d"}]}]
		
		this.social();
		this.GetYear = today.getFullYear();
	}
	
	social() {
		let url = '/assets/social.json';
		
		this.http.get(url)
			.subscribe(response => {
				this.links = response;
			});
	}
}

interface marker {
	lat: number;
	lng: number;
	info?: string;
	iconUrl?: string;
	draggable: boolean;
}