import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  showServicesDefault = true;

  servicesInfo: Array<Service> = [
    {
      id: 1,
      skill: "UI/UX Design",
      role: "Designing from scratch a lovely and user friendly feel is my top priority. For example- Bootstrap Framework, JavaScript, JQuery were used to develop the frontend of an application.",
      alterservice: { id: 1, imagurl: "#", altertext: "I was able to gain a deeper understanding of the concepts and principles I had studied in the classroom. " },
    },
    { id: 2,
      skill: "Front-End Dev", 
      role: "Designing from scratch a lovely and user friendly feel is my top priority. Several programming languages that are in use to develop a web based application or software" ,
      alterservice:{ id: 2, imagurl: "../../assets/images/anna.jpeg", altertext: 'I also developed meaningful relationships with professionals in my industry' }
    },
    { id: 3,
      skill: "Back-End Dev", 
      role: "Designing from scratch a lovely and user friendly feel is my top priority. The main objective of this internship was to obtain knowledge on the BACKEND DEVELOPMENT OF A WEB APPLICATION.",
      alterservice:{ id: 3, imagurl: '#', altertext: 'Furthermore, I worked on a learning management system as the internship project, ' }
    }
  ]
  
   buttonText:string ="Details";

  onClickDetails = (service: Service, image: HTMLHeadingElement, text: HTMLParagraphElement) => {
  
    if (service.alter) {
      image.textContent = service.skill;
      text.textContent = service.role

      
    } else {
      image.textContent = service.alterservice?.imagurl ?? ""
      text.textContent = service.alterservice?.altertext ?? ""
    }
    service.alter = !service.alter
  }
  onClick = () =>{
    true;
  }
  }


interface Service {
  id?: number;
  skill: string;
  role: string;
  alter?: boolean;
  alterservice?: Alterservice
}
interface Alterservice {
  id: number;
  imagurl: string;
  altertext: string
}