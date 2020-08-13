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


    //var doc = new jsPDF();
    


    /*
    $('#calcformnew input, #calcformnew select').each(

        //doc.text(20, 20, 'Velux tool for calculating ventilation of buildings. Your results are below!');

        function(index){  
            var input = $(this);
            //alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());

            var newLine = "\r\n"
            var msg = "Get the details of elements from the specific form with the form id"
            msg += newLine;
            msg += "Type: " + input.attr('type');
            msg += newLine;
            msg += "Name: "+ input.attr('name');
            msg+= newLine;
            msg += "Value: "+ input.val();
            alert(msg);
            console.log(input)
        }

        doc.save('Input.pdf')  
    );

    */

    /*

    var formElements = new Array();
    var j=30;
    $('#calcformnew input, #calcformnew select').each(function(){
        
        formElements.push($(this));
        doc.text(20, j, formElements);
        j=j+5;
    });

    doc.save('Input.pdf'); 

    */



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


    function updateSCResults() {
        //let sc1_occ = $('#sc_occupancy_list'+usrNr).val();
        //console.log(provincie);
        //let brandweerzone=$("#brandweerzone");
        //let values=[];
        var i;

        for(i = 0; i < arguments.length; i++) {
            let sc_occ = $('#sc_occupancy_list'+arguments[i]).val();

            switch(sc_occ) {
                case 'badhuizen':
                case 'boekerijen':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('12m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('9msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('3,0 X 3,0m');
                    break;

                case 'Accumulatorenstations':
                case 'Beton':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('18m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('20msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('4,5 X 4,5m');
                    break;
    
                default:
                    
            }



        }


    }

    function updateSC2Results() {
        let sc2_occ = $('#sc2_occupancy_list').val();
        //console.log(provincie);
        //let brandweerzone=$("#brandweerzone");
        //let values=[];
        switch(sc2_occ) {
            case 'badhuizen':

            case 'boekerijen':
                $("#sc2display :input[name=Circumference]").val('3');

            default:
                
        }

    }

    function updateSC3Results() {
        let sc3_occ = $('#sc3_occupancy_list').val();
        //console.log(provincie);
        //let brandweerzone=$("#brandweerzone");
        //let values=[];
        switch(sc3_occ) {
            case 'badhuizen':

            case 'boekerijen':
                $("#sc3display :input[name=Circumference]").val('3');

            default:
                
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


/*
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



    }); //cmd ends
    */


   $('#ventCalculation').click(function (event) {

        //updateSCResults();
        updateSCResults(1,2,3);



    }); //ventCalculation ends



    $('#pdfSave').click(function (event) {
        var doc = new jsPDF();
        doc.text(20, 20, 'Velux tool for calculating ventilation of buildings. Your results are below!');

        var formElements = new Array();
        var j=30;
        //var n=0;
        var indSelect=0;


        //var msg = "Get the details of elements from the specific form with the form id"

        var newLine = "\r\n"
        $('#calcformnew input, #calcformnew select').each(function(){
        
            var input = $(this);
            var s = $(this);
           
            if( !(typeof input.attr('name') === 'undefined')  ){
                
                //if(input.tagName === 'INPUT' && input.type === 'text') {
                if(input.is('input')) {

                    var msg = input.attr('name') + ':   '+input.val();
                    doc.text(20, j,  msg  );
                    j=j+3;
                }
                j=j+2;
                //if(input.tagName === 'SELECT') {
                if(input.is('select')) {

                    var userval = s[0].options[s[0].selectedIndex].text;
                    var msg = input.attr('name') + ':   '+userval;
    
                    //doc.text(20, j,  msg  );

                    if(   (parseInt(input.val()) != 0)  && !( input.val().trim() ===("base").valueOf() )  && !( input.val().trim() ===("").valueOf() ) ) {
                            doc.text(20, j,  msg  );
                            j=j+5;
                    }
               
                }

            }
   


    
    
            //j=j+1;
            //n=n+1;
        });


    
        formElements.forEach(element => console.log(element));
        doc.save('Input.pdf'); 
        event.preventDefault();
      


    }); //cmd ends



    



        
}); //document ready ends