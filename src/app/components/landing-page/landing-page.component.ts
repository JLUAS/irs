import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: false
})
export class LandingPageComponent implements OnInit{
  slide: number = 1;
  totalSlides: number = 2;

  countdownNumbers: number[] = [];

  ngOnInit() {
    // Genera números desde 154 hasta 0
    for (let i = 154; i >= 0; i--) {
      this.countdownNumbers.push(i);
    }
  }

  // Datos para la sección de Experiencia Internacional
  internationalExperiences = [
    { name: 'Alemania', count: 8 },
    { name: 'España', count: 7 },
    { name: 'Estados Unidos', count: 5 },
    { name: 'Japón', count: 4 },
    { name: 'Canadá', count: 4 },
    { name: 'Australia', count: 2 },
    { name: 'Suecia', count: 3 },
    { name: 'Italia', count: 3 },
    { name: 'Corea del Sur', count: 2 }
  ];

  prevSlide() {
    this.slide = this.slide > 1 ? this.slide - 1 : this.totalSlides;
  }

  nextSlide() {
    this.slide = this.slide < this.totalSlides ? this.slide + 1 : 1;
  }
}
