import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  trajetoriaProfissional = [
    {
      ano: '2018',
      evento: 'Graduação em Nutrição'
    },
    {
      ano: '2019',
      evento: 'Especialização em Nutrição Clínica'
    },
    {
      ano: '2020',
      evento: 'Início da Clínica Própria'
    },
    {
      ano: '2022',
      evento: 'Pós-graduação em Nutrição Esportiva'
    }
  ];

  profileImage = '/assets/profile-image.jpg';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimation();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimation();
    }
  }

  private initScrollAnimation() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.fade-in, .ant-timeline-item').forEach((item) => {
        observer.observe(item);
      });
    }
  }
} 