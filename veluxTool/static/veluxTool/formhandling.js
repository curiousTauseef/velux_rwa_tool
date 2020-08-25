

$(document).ready(function () {

    //form validation JS borrowed from https://getbootstrap.com/docs/4.3/components/forms/?#how-it-works
    console.log("Updated JS ready for updating HTML elements in veluxTool + minimal validation + approximate solution for AvCv loop");

    /*
    bootstrapValidate('#pname', 'min:5:Enter at least 5 Characters', function (isValid) {
        if (isValid) {
            alert('Element pname is valid');
        } else {
            alert('Element pname is invalid');
        }
     });
     */

     /*
    var s1 = document.getElementById("buildingType").value;
    alert("buildingType : " + s1);

    var s1Indx = document.getElementById("buildingType").selectedIndex;
    alert("buildingType Selected Index : " + s1Indx);

    var s1OptsBoolean = document.getElementById("buildingType").options[0].selected;
    alert("buildingType Boolean for option 0 : " + s1OptsBoolean);

    var s1OptsBoolean = document.getElementById("buildingType").options[1].selected;
    alert("buildingType Boolean for option 1 : " + s1OptsBoolean);

    
     /*

    var s2 = document.getElementById("buildingClass").value;
    alert("buildingClass" + s2);
    var s3 = document.getElementById("nrLayers").value;
    alert("nrLayers" + s3);
    var s4 = document.getElementById("smoke_compts").value;
    alert("smoke_compts" + s4);
    */

    //Globals after DOM is ready
    var buildingType = document.getElementById('buildingType');
    // reference to selected option
    var buildingTypeOpt = buildingType.options[buildingType.selectedIndex];

    (function(API) {
		API.textAlign = function(txt, options, x, y) {
				options = options || {};
				// Use the options align property to specify desired text alignment
				// Param x will be ignored if desired text alignment is 'center'.
				// Usage of options can easily extend the function to apply different text
				// styles and sizes

				// Get current font size
				var fontSize = this.internal.getFontSize();

				// Get page width
				var pageWidth = this.internal.pageSize.width;

				// Get the actual text's width
				// You multiply the unit width of your string by your font size and divide
				// by the internal scale factor. The division is necessary
				// for the case where you use units other than 'pt' in the constructor
				// of jsPDF.

				var txtWidth = this.getStringUnitWidth(txt) * fontSize / this.internal.scaleFactor;

				if (options.align === "center") {

						// Calculate text's x coordinate
						x = (pageWidth - txtWidth) / 2;

				} else if (options.align === "centerAtX") { // center on X value

						x = x - (txtWidth / 2);

				} else if (options.align === "right") {

						x = x - txtWidth;
				}

				// Draw text at x,y
				this.text(txt, x, y);
		};
		/*
		    API.textWidth = function(txt) {
			    var fontSize = this.internal.getFontSize();
		        return this.getStringUnitWidth(txt)*fontSize / this.internal.scaleFactor;
		    };
		*/

		API.getLineHeight = function(txt) {
				return this.internal.getLineHeight();
		};

    })(jsPDF.API);


    $(document).on('change', '#smoke_compts', () => {
        updateSmokeCompts();
    });

    function updateSmokeCompts() {
       let n = parseInt($('#smoke_compts').val());
       console.log("# of smoke compartments selected");
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
               $('#resultsc'+i).css("display", "block");

           }
           else{
               console.log("making smoke compartment hidden",i);
               $('#labelug'+i).css("display", "none");
               $('#resultsc'+i).css("display", "none");

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
        console.log("update the sc fire characteristics");

        //for(i = 0; i < arguments.length; i++) {
        for(i = 0; i < 1; i++) {
            let sc_occ = $('#sc_occupancy_list'+arguments[i]).val();
            console.log(sc_occ);
            console.log(arguments[i]);
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
                //Normal risico with Categorie 3 (N3)
                case 'Bakelietfabrieken':
                case 'Banden voor brandopnemers en dgl.':
                case 'Banketbakerijnen':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('24m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('36msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('6,0 X 6,0m');
                    break;
                //Normal risico with Categorie 4 (N4)
                case 'Afval en lompen(textiel)':
                case 'Alcohol(stokerij, magazijnen, aftrekkerijnen van':
                case 'Azijnfabrieken':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('36m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('81msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('9,0 X 9,0m');
                    break;
                //High risico with Categorie 4 (D1)
                case 'Confectiewerkplaatsen':
                case 'Houtverkoling':
                case 'Hout(creosoteren)':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('36m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('81msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('9,0 X 9,0m');
                    break;
                //High risico with Categorie 4 (D2)
                case 'Vliegtuigloodsen':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('36m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('81msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('9,0 X 9,0m');
                    break;
                //High risico with Categorie 4 (D3)
                case 'Afvalvezels(bewerken van)':
                case 'Asfalt':
                case 'Bandenindustrie':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('36m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('81msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('9,0 X 9,0m');
                    break;
                //High risico with Categorie 4 (D4)
                case 'Acetyleen':
                case 'Celluloid':
                case 'Gassen in vloeibare toestand':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('36m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('81msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('9,0 X 9,0m');
                    break;
                default:
                  
            }
        }
    }

    /* If needed button click can update the area parameters for fire source
   $('#ventCalculation').click(function (event) {
        updateSCResults(1,2,3);

    }); //ventCalculation ends
    */

    //On selection of occupancy for any of the smoke compartments, results of categories are to be displayed.
    //Rather than button click, user selection changes the results.
    $(document).on('change', '#sc_occupancy_list1', () => {
        console.log("chng sc1 selection");
        updateSCResults(1);
    });

    $(document).on('change', '#sc_occupancy_list2', () => {
        console.log("chng sc2 selection");

        updateSCResults(2);
    });

    $(document).on('change', '#sc_occupancy_list3', () => {
        console.log("chng sc3 selection");

        updateSCResults(3);
    });

    //function that is triggered when event of pdf saving button click occurs
    $('#pdfSave').click(function (event) {
        var doc = new jsPDF();
        //doc.text(20, 20, 'Velux tool for calculating ventilation of buildings. Your results are below!');
        var j=30;
        var indSelect=0;
        var newLine = "\r\n";
        var veluxtool_title = "Velux Tool";
        doc.textAlign(veluxtool_title, {
            align: "center"
        }, 0, 15);
        var compNr = 0;
        //let usrSCcomp = parseInt($('#smoke_compts').val());

        //function that iterates over the form to check for either an input HTML tag or a select HTML tag
        $('#calcformnew input, #calcformnew select').each(function(){
      
            var input = $(this);
            var s = $(this);
           
            if( !(typeof input.attr('name') === 'undefined')  ){
                //if logic to insert some nice layout separation for each new compartment details
                if( (input.attr('name') === 'occupancy') && ( (compNr +1) <= parseInt($('#smoke_compts').find(":selected").text())   ) ) {
                    compNr++;
                    var msg = '---------------------------------------------------------------------------------';
                    doc.text(20, j,  msg  ); 
                    j=j+3;
                    var msg = '                     Compartment '+ compNr +' inputs and result                    ';
                    doc.text(20, j,  msg  ); 
                    j=j+3;
                }
                //if logic to check that if its input element then its value is not empty
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

    }); //pdfSave ends

//Refer : https://datatables.net/manual/data/
    function OutNatVents ( paramName, paramSymbol, paramUnit, paramVal ) {
        this.paramName = paramName;
        this.paramSymbol = paramSymbol;
        this.paramUnit = paramUnit;
        this.paramVal = paramVal;
     

    };

    function chckInletHeight() {
            var Hi = arguments[0];
            var yankee  = arguments[1];
            if(Hi > yankee - 0.5) 
                {alert("Check inlet height : Inlet Height must be <= (Y- 0.5)m"); return "failure";}
            else
               return "success";
     }

     function chckSmScHeight() {
        var HSC = arguments[0];
        var yankee  = arguments[1];
        if(HSC > yankee - 0.5) {alert("Check  height smoke screen from floor: Height must be <= (Y- 0.5)m");}
     }



     function updateModalSmokeCompts() {
        let n = parseInt($('#smoke_compts').val());
        //$('#restablsc'+1).DataTable().clear();
        //$('#restablsc'+2).DataTable().clear();
        //$('#restablsc'+3).DataTable().clear();

        for(let i=1;i<=3;i++) {
            if(n >= i){

                //Now do the calculations



                var Mf = 0.188 * parseFloat($("#sc"+i+"display :input[name=Circumference]").val()) * Math.pow(parseFloat($('#yankee_sc'+i).val()), 1.5);
                var thetaC = ( (0.8 * 250 * parseFloat($("#sc"+i+"display :input[name=Fire-Area]").val()) )/ Mf);
                var db = parseFloat($('#heightvent_sc'+i).val()) - parseFloat($('#yankee_sc'+i).val());
                var Tc = 273 + parseFloat($('#envtemp_sc'+i).val()) + (  (0.8 * 250 * parseFloat($("#sc"+i+"display :input[name=Fire-Area]").val()) )/ Mf);
                console.log("Solve for Tc");
                console.log(Tc);
                var Tcsquared= Math.pow(Tc, 2);
                var T0= 273 + parseFloat($('#envtemp_sc'+i).val());
                var N=Tcsquared + T0*Tc;
                var D=2 * 9.81 * db * thetaC * T0;
                var Aisquared=Math.pow(parseFloat($('#areainlet_sc'+i).val()), 2);
                var Cisquared=Math.pow(parseFloat($('#ci_sc'+i).val()), 2);

                var C1 = Mf/1.225;
                var C2 = Tcsquared ; //Tcsquared
                var C3 = ((T0*Tc)/(Aisquared*Cisquared));
                var C4 = 2 * 9.81 * db * thetaC * T0;
                console.log("Values of four coefficients:");
                console.log(C1);
                console.log(C2);
                console.log(C3);
                console.log(C4);
        
                var AvCv = (C1)*(  Math.sqrt(C2/(C4-C3*(C1^2))) );


                //document.getElementById('resultmodal').style.display = 'block';
                //$('#restablsc'+i).DataTable().clear();


                console.log("Update datatables for compartment");
                //if($.fn.dataTable.isDataTable( '#restablsc'+i )){$('#restablsc'+i).DataTable.destroy();}
                //Now update the modals for each smoke compartment
                    // Refer : https://datatables.net/manual/data/
                    $('#restablsc'+i).DataTable( {
                        //retrieve: true,
                        destroy: true,
                        data: [
                            new OutNatVents( "Hoogte", "Hc", "m", parseFloat($('#heightvent_sc'+i).val()) ),
                            new OutNatVents( "Rookvrije hoogte", "Y", "m", parseFloat($('#yankee_sc'+i).val()) ),
                            new OutNatVents( "Omgevingstemperatuur", "t0", "°C", parseInt($('#envtemp_sc'+i).val()) ),
                            new OutNatVents( "Omtrek", "Wf", "m", parseFloat($("#sc"+i+"display :input[name=Circumference]").val()) ),
                            new OutNatVents( "Oppervlakte", "Af", "m²", parseFloat($("#sc"+i+"display :input[name=Fire-Area]").val()) ),
                            new OutNatVents( "Warmtevermogen per oppervlakteeenheid", "qf", "kW/m²", 250),

                            new OutNatVents( "Dikte rooklaag", "db", "m", parseFloat($('#heightvent_sc'+i).val()) - parseFloat($('#yankee_sc'+i).val()) ),
                            //new OutNatVents( "Rookmassastroom", "Wf", "m", 36),
                            new OutNatVents( "Rookmassastroom", "Mf", "m", 0.188 * parseFloat($("#sc"+i+"display :input[name=Circumference]").val()) * Math.pow(parseFloat($('#yankee_sc'+i).val()), 1.5) ),

                            new OutNatVents( "Convectieve warmtestroom", "Qf", "kW", 0.8 * 250 * parseFloat($("#sc"+i+"display :input[name=Fire-Area]").val()) ),
                            //get via formula : tc = t0 + thetaC
                            
                            new OutNatVents( "gemiddelde temperatuur van de rooklaag", "tc", "C", parseInt($('#envtemp_sc'+i).val()) + (   (0.8 * 250 * parseFloat($("#sc"+i+"display :input[name=Fire-Area]").val()) ) / (0.188 * parseFloat($("#sc"+i+"display :input[name=Circumference]").val()) * Math.pow(parseFloat($('#yankee_sc'+i).val()), 1.5) )   ) ),
                            new OutNatVents( "Toevoer ratio", "AiCi/(AvCv)", "", 36),
                            new OutNatVents( "Oppervlakte van de rookluiken", "AvCv", "m²", AvCv),


                        // new OutNatVents( "Rookmassastroom", "Hc", "m", 0.188 * parseInt($("#sc"+1+"display :input[name=Circumference]").val()) * Math.pow(parseInt($('#yankee_sc1').val()), 1.5) ),
                            //new Employee( "Garrett Winters", "Director", "$5,300", "Edinburgh" )
                        ],
                        columns: [
                            { data: 'paramName' },
                            { data: 'paramSymbol' },
                            { data: 'paramUnit' },
                            { data: 'paramVal' }
                        ]
                    } );

            }
            else{ //zero smoke compartments


            }
        }//end of for to update modal
    }

        
   $('#ventCalculation').click(function (event) {
        //updateSCResults(1,2,3);
        console.log("Vent Calculation. check for min chars");
        if((chckInletHeight(document.getElementById("higthighairinlet_sc1").value,document.getElementById("yankee_sc1").value)) === "failure"){return "heightCheckFail";};
        chckSmScHeight(document.getElementById("heightsmkscrn_sc1").value,document.getElementById("yankee_sc1").value);

        
        var s4 = document.getElementById("smoke_compts").value;
        if(s4 == 0) {alert("Please choose at least one smoke compartment");}
        if(($('#pname').val().trim() ===("").valueOf() )) {alert("Please enter a string for project name");}
        

       var scnmbr = parseInt($('#smoke_compts').val());
       console.log("# of result bodies");
       console.log(scnmbr);
       if(scnmbr==0){
           document.getElementById('resultmodal').style.display = 'none';
       }
       else {
        //document.getElementById('resultmodal').style.display = 'block';


             updateModalSmokeCompts();


           document.getElementById('resultmodal').style.display = 'block';
       }//scnmbr !=0 else part ends



/*
        $('#restablsc2').DataTable( {
            data: [
                new OutNatVents( "Hoogte", "Hc", "m", 6),
                new OutNatVents( "Rookvrije hoogte", "Y", "m", 3),
                new OutNatVents( "Omgevingstemperatuur", "t0", "°C", 15),
                new OutNatVents( "Omtrek", "Wf", "m", 36),
                new OutNatVents( "Oppervlakte", "Af", "m²", 3),
                new OutNatVents( "Warmtevermogen per oppervlakteeenheid", "qf", "kW/m²", 250),

                new OutNatVents( "Dikte rooklaag", "db", "m", 3.0),
                //new OutNatVents( "Rookmassastroom", "Wf", "m", 36),
                new OutNatVents( "Rookmassastroom", "Mf", "m", 0.188 * parseFloat($("#sc"+2+"display :input[name=Circumference]").val()) * Math.pow(parseFloat($('#yankee_sc2').val()), 1.5) ),
                new OutNatVents( "Convectieve warmtestroom", "Qf", "kW", 0.8 * 250 * parseFloat($("#sc"+2+"display :input[name=Fire-Area]").val()) ),

                new OutNatVents( "gemiddelde temperatuur van de rooklaag", "tc", "C", 32),
                new OutNatVents( "Toevoer ratio", "AiCi/(AvCv)", "", 36),
                new OutNatVents( "Oppervlakte van de rookluiken", "Av", "m²", 250114),
            ],
            columns: [
                { data: 'paramName' },
                { data: 'paramSymbol' },
                { data: 'paramUnit' },
                { data: 'paramVal' }
            ]
        } );

        $('#restablsc3').DataTable( {
            data: [
                new OutNatVents( "Hoogte", "Hc", "m", 6),
                new OutNatVents( "Rookvrije hoogte", "Y", "m", 3),
                new OutNatVents( "Omgevingstemperatuur", "t0", "°C", 15),
                new OutNatVents( "Omtrek", "Wf", "m", 36),
                new OutNatVents( "Oppervlakte", "Af", "m²", 3),
                new OutNatVents( "Warmtevermogen per oppervlakteeenheid", "qf", "kW/m²", 250),

                new OutNatVents( "Dikte rooklaag", "db", "m", 3.0),
                //new OutNatVents( "Rookmassastroom", "Wf", "m", 36),
                new OutNatVents( "Rookmassastroom", "Mf", "m", 0.188 * parseFloat($("#sc"+3+"display :input[name=Circumference]").val()) * Math.pow(parseFloat($('#yankee_sc3').val()), 1.5) ),
                new OutNatVents( "Convectieve warmtestroom", "Qf", "kW", 0.8 * 250 * parseFloat($("#sc"+3+"display :input[name=Fire-Area]").val()) ),

                new OutNatVents( "gemiddelde temperatuur van de rooklaag", "tc", "C", 32),
                new OutNatVents( "Toevoer ratio", "AiCi/(AvCv)", "", 36),
                new OutNatVents( "Oppervlakte van de rookluiken", "Av", "m²", 250114),
            ],
            columns: [
                { data: 'paramName' },
                { data: 'paramSymbol' },
                { data: 'paramUnit' },
                { data: 'paramVal' }
            ]
        } );

        //https://stackoverflow.com/questions/4514302/javascript-equation-solver-library
        
        var Mf = 0.188 * parseFloat($("#sc"+1+"display :input[name=Circumference]").val()) * Math.pow(parseFloat($('#yankee_sc1').val()), 1.5);
        var thetaC = ( (0.8 * 250 * parseFloat($("#sc"+1+"display :input[name=Fire-Area]").val()) )/ Mf);
        var db = parseFloat($('#heightvent_sc1').val()) - parseFloat($('#yankee_sc1').val());
        var Tc = 273 + parseFloat($('#envtemp_sc1').val()) + (  (0.8 * 250 * parseFloat($("#sc"+1+"display :input[name=Fire-Area]").val()) )/ Mf);
        console.log("Solve for Tc");
        console.log(Tc);
        var Tcsquared= Math.pow(Tc, 2);
        var T0= 273 + parseFloat($('#envtemp_sc1').val());
        var N=Tcsquared + T0*Tc;
        var D=2 * 9.81 * db * thetaC * T0;
        var Aisquared=Math.pow(parseFloat($('#areainlet_sc1').val()), 2);
        var Cisquared=Math.pow(parseFloat($('#ci_sc1').val()), 2);

        console.log("Dump the variables obtained from user: ");
        console.log("Mf");
        console.log(Mf);
        console.log("Tcsquared");
        console.log(Tcsquared);
        console.log("Aisquared");
        console.log(Aisquared);
        console.log("Cisquared");
        console.log(Cisquared);
        console.log("T0");
        console.log(T0);
        console.log("Tc");
        console.log(Tc);
        console.log("D");
        console.log(D);

        var C1 = Mf/1.225;
        var C2 = Tcsquared ; //Tcsquared
        var C3 = ((T0*Tc)/(Aisquared*Cisquared));
        var C4 = 2 * 9.81 * db * thetaC * T0;
        console.log("Values of four coefficients:");
        console.log(C1);
        console.log(C2);
        console.log(C3);
        console.log(C4);

        var tauSoln3 = (C1)*(  Math.sqrt(C2/(C4-C3*(C1^2))) );

        console.log(C1);
        console.log(Math.sqrt(C2/(C4-C3*(C1^2))));
        
        console.log("AvCv solution");
        console.log(tauSoln3);
        */
 
        //$('calcformnew[data-novalidate=yes]').bootstrapValidate();
        //$.bootstrapValidate();


        /*

        bootstrapValidate('#smoke_compts', 'required:Please select one option', function (isValid) {
            if (isValid) {
                //alert('Element is valid');
            } else {
                //alert('Element is invalid');
            }
         });

         bootstrapValidate('#pname', 'min:5:Enter at least 5 Characters', function (isValid) {
            if (isValid) {
                //alert('Element is valid');
            } else {
                alert('Element pname is invalid. Kindly check !');
            }
         });
         */
         
        console.log("smoke_compts validated");
  

    }); //ventCalculation ends
 
        
}); //document ready ends