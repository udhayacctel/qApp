import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { GlobalProvider } from '../../providers/globalProvider';
import { Subject } from '../../model/subject'


@Component({
    selector: 'page-result',
    templateUrl: 'result.html'

  })

  export class ResultPage {
      subject: Subject;
      subjectLabel: string[];
    


    @ViewChild('doughnutCanvas') doughnutCanvas;

    doughnutChart:any;

    constructor(globalProvider: GlobalProvider) {
        this.subjectLabel = new Array();
        this.subject = globalProvider.getSubject();
        this.subjectLabel.push("Physcis");
        this.subjectLabel.push("Chemistry");
        this.subjectLabel.push("Biology");

        console.log("the value of subject " + this.subject.isPhysics);
        console.log("the value of subject " + this.subject.isChemistry);
    }
    
    newLegendClickHandler(event,Array) {

        console.log(" value of legendItem");


    }
    ionViewDidLoad() {
        
        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

        
            type: 'doughnut',
            data: {
                labels: this.subjectLabel,
                datasets: [{
                    label: '# of Votes',
                    data: [70,100,80],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56", 
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                    ]
                }]
            },
        
            options: {
                legend: {
                    display: true
                },
                onClick:function(evt, elements) {
                
                    var datasetIndex;
                    var dataset;
                    var index = elements[0]._index;
                    datasetIndex = elements[0]._datasetIndex;
                    dataset = this.data.datasets[datasetIndex];
                    console.log("the value of index" + index);
                    console.log("the value of colour" + dataset.backgroundColor[index]);
                    console.log("the value of colour" + dataset.data[index]);
                    console.log("the value of colour" + this.data.dlabels[index]); 

                }

            }

        });

    
    }    
}

