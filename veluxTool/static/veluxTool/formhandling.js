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
               $('#labelug'+i).css("display", "block");
           }
           else{
               console.log("making smoke compartment hidden",i);
               $('#labelug'+i).css("display", "none");
           }
        }
    }

    $(document).on('change', '#buildingType', () => {
       console.log("customJS handling:User changed building type");
       console.log("Building type chosen");
       console.log( buildingTypeOpt.value );
       console.log( buildingTypeOpt.text );
       updateHoogteGebouw();
    });

    function updateHoogteGebouw() {
       let aantalGebouwen = $('#buildingType').val();
       switch(aantalGebouwen) {
           case 'typeIndustry':
               console.log("industry selected");
               $('#classGebouw').show();
               break;
           case 'typeRegular':
               $('#classGebouw').hide();
               break;
           default:
               break;
               // do nothing
       }
    }


    function updateSCResults() {
        var i;

        //for(i = 0; i < arguments.length; i++) {
        for(i = 0; i < 1; i++) {
            let sc_occ = $('#sc_occupancy_list'+arguments[i]).val();

            switch(sc_occ) {
                //Klein risico with Categorie 1 (L)
                case 'Badhuizen':
                case 'Boekerijen':
                case 'Gevangenissen':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('12m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('9msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('3,0 X 3,0m');
                    break;
                //Klein risico with Categorie 1 (N1)
                case 'Accumulatorenstations':
                case 'Beton':
                case 'Bewerking-tot-schuimwijn':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('12m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('9msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('3,0 X 3,0m');
                    break;
                //Normal risico with Categorie 2 (N2)
                case 'Accumulatorenfabrieken':
                case 'Ammoniakfabrieken(synthetisch)':
                case 'Asbest(fabrieken van voorwerpen)':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('18m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('20msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('4,5 X 4,5m');
                    break;
                default:
                  
            }
        }
    }

    /*
   $('#ventCalculation').click(function (event) {
        updateSCResults(1,2,3);

    }); //ventCalculation ends
    */

    $(document).on('change', '#sc_occupancy_list1', () => {
        updateSCResults(1);
    });

    $(document).on('change', '#sc_occupancy_list2', () => {
        updateSCResults(2);
    });

    $(document).on('change', '#sc_occupancy_list3', () => {
        updateSCResults(3);
    });



    $('#pdfSave').click(function (event) {
        var doc = new jsPDF();
        doc.text(20, 20, 'Velux tool for calculating ventilation of buildings. Your results are below!');
        var j=30;
        var indSelect=0;

        var newLine = "\r\n"
        $('#calcformnew input, #calcformnew select').each(function(){
        
            var input = $(this);
            var s = $(this);
           
            if( !(typeof input.attr('name') === 'undefined')  ){
                
                //if(input.tagName === 'INPUT' && input.type === 'text') {
                if(input.is('input') && !( input.val().trim() ===("").valueOf() )  ) {

                    var msg = input.attr('name') + ':   '+input.val();
                    doc.text(20, j,  msg  );
                    j=j+3;
                }
                j=j+2;

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

        doc.save('Input.pdf'); 
        event.preventDefault();

    }); //cmd ends



    



        
}); //document ready ends