import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Highlight } from '../models/highlight';
import { expand, flyInOut, visibility } from '../animations/app.animation';


@Component({
  selector: 'app-slide-element',
  templateUrl: './slide-element.component.html',
  styleUrls: ['./slide-element.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block'
  },
  animations: [
    flyInOut(),
    visibility(),
    expand()
  ]
})
export class SlideElementComponent implements OnInit {
  highlight: Highlight;
  highlightList: Highlight[];
  prev! : Highlight;
  next!: Highlight;
  visibility = 'shown';

  @ViewChild('fform') commentFormDirective;

  formErrors = {
    'author' : '',
    'comment' : ''
  };

  validationMessages = {
    'author' : {
      'required' : 'Author\'s name required.',
      'minlength' : 'Author\'s name must be at least 2 characters long.',
      'maxlength' : 'Author\'s name cannot be more than 25 characters long.'
    },
    'comment' : {
      'required' : 'Comment required'
    }
  };

  constructor() 
  {
    this.highlightList = [];
    this.addHighlights();
    this.highlight = this.highlightList[0];
    this.setPrevNext(this.highlight);
  }
  

  ngOnInit() {
    this.setPrevNext(this.highlight);
  }

  setPrevNext(highlight : Highlight) : void {
    let index = this.highlightList.indexOf(highlight);
    this.prev = this.highlightList[(this.highlightList.length + index - 1) % this.highlightList.length];
    this.next = this.highlightList[(this.highlightList.length + index + 1) % this.highlightList.length];
  }

  pressNext() {
    this.highlight = this.next;
    this.setPrevNext(this.highlight);
  }

  pressPrev() {
    this.highlight = this.prev;
    this.setPrevNext(this.highlight);
  }

  addHighlights() {
    let h1 = new Highlight;
    h1.name = "Общий осмотр у терапевта";
    h1.description = terapevtDesc;
    h1.pic = "assets/images/terapevt.jpeg";
    this.highlightList.push(h1);
    let h2 = new Highlight;
    h2.name = "Общий анализ крови";
    h2.description = bloodAnalyzeDesc;
    h2.pic = "assets/images/laboratory.jpg";
    this.highlightList.push(h2);
    let h3 = new Highlight;
    h3.name = "Диспансеризация";
    h3.description = dispanserDesc;
    h3.pic = "assets/images/dispanser.jpg";
    this.highlightList.push(h3);
    let h4 = new Highlight;
    h4.name = "ЭКГ";
    h4.description = ekgDesc;
    h4.pic = "assets/images/ekg.jpg";
    this.highlightList.push(h4);
  }
}


const terapevtDesc = "Осмотр у терапевта является одной из основных медицинских услуг, которую предоставляют большинство государственных и частных клиник. Терапевт проводит осмотр пациента, чтобы оценить его общее состояние здоровья, выявить возможные заболевания или проблемы со здоровьем и назначить соответствующее лечение. Осмотр включает в себя измерение артериального давления, пульса, температуры тела, а также проведение других необходимых исследований для диагностики заболеваний. В ходе осмотра терапевт может задавать пациенту вопросы о его симптомах, образе жизни, питании и других факторах, которые могут повлиять на здоровье. После проведения осмотра терапевт составляет заключение, которое помогает врачу определить диагноз и выбрать оптимальное лечение для пациента.";

const bloodAnalyzeDesc = "Общий анализ крови (ОАК) — это лабораторный тест, который позволяет оценить уровень различных компонентов крови, таких как гемоглобин, эритроциты, лейкоциты и тромбоциты. ОАК используется для выявления наличия инфекционных заболеваний, воспалительных процессов, нарушений функционирования органов и систем организма, а также для контроля эффективности лечения. Результаты ОАК позволяют врачу поставить предварительный диагноз и начать лечение в соответствии с рекомендациями врача-терапевта. Обычно ОАК проводится клиническим лаборантом, который собирает кровь из вены и отправляет ее на анализ в лабораторию. Лаборатория проводит исследование и выдает результаты анализа в течение нескольких часов или дней.";

const dispanserDesc = "Диспансеризация — это комплекс мероприятий, направленных на профилактику и выявление заболеваний на ранних стадиях. Она включает в себя медицинские осмотры, анализы, обследования и консультации специалистов. Диспансеризация проводится регулярно, обычно один раз в год, и позволяет выявить заболевания на ранней стадии, когда они еще не привели к серьезным последствиям. Во время диспансеризации пациент проходит ряд медицинских обследований, включая общий анализ крови, биохимический анализ крови, анализ мочи, электрокардиограмму, флюорографию легких и другие исследования. Врач-терапевт оценивает результаты всех проведенных исследований и дает рекомендации по дальнейшему лечению и профилактике заболеваний.";

const ekgDesc = "ЭКГ (электрокардиограмма) — это метод диагностики, который позволяет оценить работу сердца и выявить нарушения ритма, проводимости или возбудимости сердечной мышцы. ЭКГ проводится медицинским персоналом с помощью специального аппарата, который записывает электрические сигналы, возникающие при сокращении сердца. Полученные данные обрабатываются компьютером и анализируются врачом-кардиологом. ЭКГ позволяет выявить различные заболевания сердца, такие как инфаркт миокарда, стенокардию, аритмии и другие нарушения работы сердечно-сосудистой системы. Результаты ЭКГ помогают врачу определить необходимость проведения дополнительных исследований, таких как УЗИ сердца, рентген грудной клетки и другие, для уточнения диагноза и назначения эффективного лечения.";