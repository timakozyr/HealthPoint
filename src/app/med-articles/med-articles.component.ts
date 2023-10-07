import { Component } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-med-articles',
  templateUrl: './med-articles.component.html',
  styleUrls: ['./med-articles.component.scss']
})
export class MedArticlesComponent {
  articles: Article[];

  constructor() {
    this.articles = [];
    let article = new Article();
    article.id = 1;
    article.title = "КОРОНАВИРУС (COVID-19). ОГРАНИЧЕНИЯ ПЕРЕДВИЖЕНИЯ И ОБЯЗАТЕЛЬНАЯ ВАКЦИНАЦИЯ В СУБЪЕКТАХ РОССИЙСКОЙ ФЕДЕРАЦИИ";
    article.annotation = "Справочная информация: \"Коронавирус (COVID-19). Ограничения передвижения и обязательная вакцинация в субъектах Российской Федерации\"";
    article.text = `В связи с распространением новой коронавирусной инфекции (COVID-19) органами исполнительной власти субъектов РФ в соответствии с пунктом 1 Указа Президента РФ от 11.05.2020 N 316 реализуется комплекс ограничительных и иных мероприятий по обеспечению санитарно-эпидемиологического благополучия населения.

    В ряде субъектов РФ была введена обязательная вакцинация против новой коронавирусной инфекции (COVID-19) определенных категорий граждан.
    
    За нарушение установленных ограничений в отдельных регионах введены дополнительные меры административной ответственности, если допущенные нарушения не содержат уголовно наказуемого деяния или не влекут административной ответственности в соответствии с КоАП РФ. По вопросам применения мер административной ответственности см. также обзоры по отдельным вопросам судебной практики, связанным с применением законодательства и мер по противодействию распространению на территории Российской Федерации новой коронавирусной инфекции (COVID-19) N 1, 2, 3, утв. Президиумом ВС РФ 21.04.2020, 30.04.2020, 17.02.2021.
    
    `;

    this.articles.push(article);
  }
}
