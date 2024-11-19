import { Component, OnInit, OnDestroy } from '@angular/core';

interface TeamMember {
  name: string;
  image: string;
  alt: string;
  gitUser?: string;
}

interface DevelopmentStage {
  image: string;
  description: string;
  
}

@Component({
  selector: 'app-ourstory',
  templateUrl: './ourstory.component.html',
  styleUrls: ['./ourstory.component.css']
})
export class OurstoryComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  autoSlideInterval: any;
  totalItems = 6;

  teamMembers: TeamMember[] = [
    { name: 'Rolando Loaisiga', image: 'assets/rolando.png', alt: 'Rolando Loaisiga', gitUser: 'Roland-fARKER' },
    { name: 'Josue Bermudez', image: 'assets/josue.png', alt: 'Josue Bermudez', gitUser: 'JosueProgrammer' },
    { name: 'Rosmery García', image: 'assets/rosme.png', alt: 'Rosmery García', gitUser: 'Rouss-Gar' },
    { name: 'Adan Chamorro', image: 'assets/Adan.png', alt: 'Adan Chamorro', gitUser: 'Ch4m0rr0' },
    { name: 'Norlan Umaña', image: 'assets/norlan.png', alt: 'Norlan Umaña', gitUser: 'Norlan-Missael'  },
    { name: 'Jeremy Serrano', image: 'assets/jeremy.png', alt: 'Jeremy Serrano', gitUser: 'Jamorant20' },
    { name: 'Allen Alvarez', image: 'assets/allen.png', alt: 'Allen Alvarez', gitUser: 'arg24785' },
    { name: 'Gabriel Palacio', image: 'assets/gabriel.png', alt: 'Gabriel Palacio', gitUser: 'Gabrielp28' },
    { name: 'Brayan Reyes', image: 'assets/brayan.png', alt: 'Brayan Reyes', gitUser: 'ElBryam' },
    { name: 'Victor Chavarría', image: 'assets/victor.png', alt: 'Victor Chavarría', gitUser: 'Víctor20236' }
  ];

  developmentStages: DevelopmentStage[] = [
    { image: 'assets/carrusel/1.png', description: 'Definiendo los requisitos' },
    { image: 'assets/carrusel/2.jpg', description: 'Primera versión de la interfaz' },
    { image: 'assets/carrusel/3.jpg', description: 'Pruebas y mejoras' },
    { image: 'assets/carrusel/4.jpg', description: 'Feedback de usuarios' },
    { image: 'assets/carrusel/5.jpg', description: 'Optimización y ajustes finales' },
    { image: 'assets/carrusel/6.png', description: 'Lanzamiento y monitoreo' }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 9000);
  }

  clearAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.developmentStages.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.developmentStages.length) % this.developmentStages.length;
  }

  showSlide(index: number): boolean {
    return this.currentIndex === index;
  }  
}