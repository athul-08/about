import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
  
})
export class AboutComponent implements OnInit{
  public Myclass='cadetblue';
  public firstname='Athul';
  public lastname='Prasad';
  public DOB='08-12-2000';
  public address='Nellikattil';
  public location='Pathanamthitta, Kerala';
  public email='athulprasad0812@gmail.com';

  constructor(){

  }
  
ngOnInit(): void {
}
onsave()
{
  
}
}