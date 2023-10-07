import { Component } from '@angular/core';
import { MedService } from '../models/med-service';

@Component({
  selector: 'app-med-services',
  templateUrl: './med-services.component.html',
  styleUrls: ['./med-services.component.scss']
})
export class MedServicesComponent {

  allServices: MedService[];

  constructor() {
    this.allServices = [];
    this.createMedService("Общий осмотр у терапевта", "services", 1, terapevtDesc);
    this.createMedService("Прохождение диспансеризации", "services", 2, dispanserDesc);
    this.createMedService("Общий анализ крови", "analyzes", 3, bloodAnalyzeDesc);
    this.createMedService("ЭКГ", "analyzes", 4, ekgDesc);
  }

  createMedService(name: string, category: string, id: number, description: string) {
    let medService = new MedService();
    medService.name = name;
    medService.category = category;
    medService.id = id;
    medService.description = description;
    this.allServices.push(medService)
  }

  filterByCategory(categoryName: string) {
    return this.allServices.filter(el => el.category == categoryName);
  }
}

const terapevtDesc = "Терапевт проводит осмотр пациента, чтобы оценить его общее состояние здоровья, выявить возможные заболевания или проблемы со здоровьем и назначить соответствующее лечение. Осмотр включает в себя измерение артериального давления, пульса, температуры тела, а также проведение других необходимых исследований для диагностики заболеваний.";

const bloodAnalyzeDesc = "Результаты ОАК позволяют врачу поставить предварительный диагноз и начать лечение в соответствии с рекомендациями врача-терапевта. Лаборатория проводит исследование и выдает результаты анализа в течение нескольких часов или дней.";

const dispanserDesc = "Во время диспансеризации пациент проходит ряд медицинских обследований, включая общий анализ крови, биохимический анализ крови, анализ мочи, электрокардиограмму, флюорографию легких и другие исследования. Врач-терапевт оценивает результаты всех проведенных исследований и дает рекомендации по дальнейшему лечению и профилактике заболеваний.";

const ekgDesc = "ЭКГ помогает выявить различные заболевания сердца, такие как инфаркт миокарда, стенокардию, аритмии и другие нарушения работы сердечно-сосудистой системы. Результаты ЭКГ помогают врачу определить необходимость проведения дополнительных исследований, например, УЗИ сердца, для уточнения диагноза и назначения эффективного лечения.";
