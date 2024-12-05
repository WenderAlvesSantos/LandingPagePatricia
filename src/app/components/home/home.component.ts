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

  faqs = [
    {
      question: 'Qual o valor da consulta?',
      answer: 'Entre em contato para conhecer nossos planos e valores personalizados.',
      active: false
    },
    {
      question: 'Como funciona o atendimento?',
      answer: 'O atendimento é personalizado e inclui avaliação completa, plano alimentar individualizado e acompanhamento contínuo para garantir seus resultados.',
      active: false
    },
    {
      question: 'Qual o método de atendimento?',
      answer: 'Oferecemos atendimento presencial em nossa clínica e também consultas online, adaptando às suas necessidades e rotina.',
      active: false
    },
    {
      question: 'Quais especialidades são atendidas?',
      answer: 'Atendemos nutrição clínica, esportiva, comportamental e funcional, sempre com foco na saúde integral e bem-estar do paciente.',
      active: false
    }
  ];

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