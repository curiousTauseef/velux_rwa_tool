//import $ from 'jquery';
//import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.umd.min.js";
//import { jsPDF } from "./jspdf";


//const jsPDF = window.jsPDF;

$(document).ready(function () {

    //form validation JS borrowed from https://getbootstrap.com/docs/4.3/components/forms/?#how-it-works
    console.log("Import http New DOM ready for pdf handling in veluxTool");

    //Globals after DOM is ready
    var buildingType = document.getElementById('buildingType');
    // reference to selected option
    var buildingTypeOpt = buildingType.options[buildingType.selectedIndex];



    $(document).on('change', '#smoke_compts', () => {
        updateSmokeCompts();
    });

    function updateSmokeCompts() {
       let n = parseInt($('#smoke_compts').val());
       console.log("number of smoke compartments selected");
       console.log(n);
       
       if(n==0){
           document.getElementById('smokecompt').style.display = 'none';


       }
       else {
           document.getElementById('smokecompt').style.display = 'block';


       }


       for(let i=1;i<=3;i++) {
           if(n >= i){
               //$('#ug'+i).css("visibility", "visible");
               //$('#labelug'+i).css("visibility", "visible");
               //$('#ug'+i).css("display", "block");
               $('#labelug'+i).css("display", "block");
           }
           else{
               console.log("making smoke compartment hidden",i);

               //$('#ug'+i).css("visibility", "hidden");
               //$('#labelug'+i).css("visibility", "hidden");
               //$('#ug'+i).css("display", "none");
               $('#labelug'+i).css("display", "none");
           }
        }
    }

        //var buildingType = $('#buildingType').val();


    $(document).on('change', '#buildingType', () => {
       console.log("customJS handling:User changed building type");

       



       console.log("Building type chosen");
       //console.log(buildingType);
       // display value and text property values
       console.log( buildingTypeOpt.value );
       console.log( buildingTypeOpt.text );

       updateHoogteGebouw();
    });

    function updateHoogteGebouw() {
       let aantalGebouwen = $('#buildingType').val();
       //console.log(aantalGebouwen)
       switch(aantalGebouwen) {
           case 'typeIndustry':
               console.log("industry selected");
               $('#classGebouw').show();
               //$('#classGebouw').css("display", "block");
               //document.getElementById('classGebouw').style.display = 'block';


               break;
           case 'typeRegular':
               $('#classGebouw').hide();
              // $('#classGebouw').css("display", "none");
               //document.getElementById('classGebouw').style.display = 'none';


               break;
           default:
               break;
               // do nothing
       }
    }














    /*
    var margins = {
        top: 70,
        bottom: 40,
        left: 30,
        width: 550
      };
      */


      /*
     $(document).on('change', '#buildingType', () => {
        console.log("Building type chosen");
        //console.log(buildingType);
        // display value and text property values
        console.log( buildingTypeOpt.value );
        console.log( buildingTypeOpt.text );
    });

    */


    /*
   buildingType.addEventListener('change', function (e) {
        console.log( buildingTypeOpt.value );
        console.log( buildingTypeOpt.text );
    });
    */
   
    /*
    $('#buildingType').change(function() {

    });
    */

     //source1 = $('#calcformnew')[0];



    $('#cmd').click(function () {
        var doc = new jsPDF();
        doc.text(20, 20, 'Velux tool for calculating ventilation of buildings. Your results are below!');

        //var btStr = $('#buildingType').val();
        //var btStr = $('#buildingType'). children("option:selected"). val();
        var pnameStr = $('#pname').val();
        var btStr = $( "#buildingType option:selected" ).text();
        var bclsStr = $( "#buildingClass option:selected" ).text();
        var lyrTypeStr = $( "#nrLayers option:selected" ).text();
        var smkNrStr = $( "#smoke_compts option:selected" ).text();



        

            //Globals after DOM is ready
           //var buildingType = document.getElementById('buildingType');
          // reference to selected option
          //var buildingTypeOpt = buildingType.options[buildingType.selectedIndex];
          
        doc.text(20, 30, 'Project Name');
        doc.text(70, 30, pnameStr);
        doc.text(20, 35, 'Building Type');
        doc.text(70, 35, btStr);
        doc.text(20, 40, 'Building Class');
        doc.text(70, 40, bclsStr);
        doc.text(20, 45, 'Number of layers');
        doc.text(70, 45, lyrTypeStr);
        doc.text(20, 50, '# of smoke compartments');
        doc.text(70, 50, smkNrStr);



        //doc.addPage();
        //doc.text(20, 20, 'Do you like that?');   
        doc.save('Test.pdf');



    });
    



        
}); //document ready ends