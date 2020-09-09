//This JS file handles the user behaviour for inputs and selects on the Velux web tool 

$(document).ready(function () {

    console.log("Test with Melchior:fesg ajax request");
    var AvCvdisplay;
    var Avdisplay;

    //Globals after DOM is ready
    var buildingType = document.getElementById('buildingType');
    // reference to selected option
    var buildingTypeOpt = buildingType.options[buildingType.selectedIndex];

    var storageheight_critical = [4, 3, 2.1, 1.2];
    //var sprinkler_flag = false;

    //Start with setting default category1 as the one having max critical storage height
    var category_sc1 =1;
    var category_sc2 =1;
    var category_sc3 =1;

    document.getElementById('storageheightsc1').addEventListener('change', function(event){
        var elem = event.target;
        console.log(elem.name);
        console.log(elem.tagName);
        console.log(elem.type);
        if(parseFloat(elem.value) > parseFloat(storageheight_critical[category_sc1-1])) {
            alert('Storage height changed: height is more than maximum allowed critical storage height! Proceeding with calculations assuming Category 4...');
            updateFireParams_Storage(1,4);
        }
        else {
           updateFireParams_Storage(1,category_sc1);
        }
    });

    document.getElementById('storageheightsc2').addEventListener('change', function(event){
        var elem = event.target;
        console.log(elem.name);
        console.log(elem.tagName);
        console.log(elem.type);
        if(parseFloat(elem.value) > parseFloat(storageheight_critical[category_sc2-1])) {
            alert('Storage height changed: height is more than maximum allowed critical storage height! Proceeding with calculations assuming Category 4...');
            updateFireParams_Storage(2,4);
        }
        else {
           updateFireParams_Storage(2,category_sc2);
        }
    });

    document.getElementById('storageheightsc3').addEventListener('change', function(event){
        var elem = event.target;
        console.log(elem.name);
        console.log(elem.tagName);
        console.log(elem.type);
        if(parseFloat(elem.value) > parseFloat(storageheight_critical[category_sc3-1])) {
            alert('Storage height changed: height is more than maximum allowed critical storage height! Proceeding with calculations assuming Category 4...');
            updateFireParams_Storage(3,4);
        }
        else {
           updateFireParams_Storage(3,category_sc3);
        }
    });
    
    $("#stored_goodssc1").change(function()
    {
        console.log("stored_goodssc1");

        //First check storage height
        var storageheightVal = parseFloat(document.getElementById("storageheightsc1").value);
        console.log("storageheight");
        console.log(storageheightVal);

        if(storageheightVal === "" || isNaN(storageheightVal) ) {
            alert('Input storage height missing! Please enter storage height before checking this field...');
            return;
        }
        category_sc1 = Math.max(parseInt(document.getElementById("stored_goodssc1").value), parseInt(document.getElementById("pkg_typesc1").value));
        console.log("category");
        console.log(category_sc1);
        var compNr = 1;
        console.log("storageheightcritical");
        console.log(storageheight_critical[category_sc1-1]);
        if(parseFloat(storageheightVal) > parseFloat(storageheight_critical[category_sc1-1])) {
            alert('Input storage height is more than critical storage height! Proceeding with calculations assuming Category 4...');
            updateFireParams_Storage(compNr,4);
        }
        else {
            updateFireParams_Storage(compNr,category_sc1);
        }
    });

    $("#stored_goodssc2").change(function()
    {
        console.log("stored_goodssc2");
        //First check storage height
        var storageheightVal = parseFloat(document.getElementById("storageheightsc2").value);
        console.log("storageheight");
        console.log(storageheightVal);

        if(storageheightVal === "" || isNaN(storageheightVal) ) {
            alert('Input storage height missing! Please enter storage height before checking this field...');
            return;
        }
        category_sc2 = Math.max(parseInt(document.getElementById("stored_goodssc2").value), parseInt(document.getElementById("pkg_typesc2").value));
        console.log("category");
        console.log(category_sc2);
        var compNr = 2;
        console.log("storageheightcritical");
        console.log(storageheight_critical[category_sc2-1]);
        if(parseFloat(storageheightVal) > parseFloat(storageheight_critical[category_sc2-1])) {
            alert('Input storage height is more than critical storage height! Proceeding with calculations assuming Category 4...');
            updateFireParams_Storage(compNr,4);
        }
        else {
            updateFireParams_Storage(compNr,category_sc2);
        }
    });

    $("#stored_goodssc3").change(function()
    {
        console.log("stored_goodssc3");
        //First check storage height
        var storageheightVal = parseFloat(document.getElementById("storageheightsc3").value);
        console.log("storageheight");
        console.log(storageheightVal);

        if(storageheightVal === "" || isNaN(storageheightVal) ) {
            alert('Input storage height missing! Please enter storage height before checking this field...');
            return;
        }
        category_sc3 = Math.max(parseInt(document.getElementById("stored_goodssc3").value), parseInt(document.getElementById("pkg_typesc3").value));
        console.log("category");
        console.log(category_sc3);
        var compNr = 3;
        console.log("storageheightcritical");
        console.log(storageheight_critical[category_sc3-1]);
        if(parseFloat(storageheightVal) > parseFloat(storageheight_critical[category_sc3-1])) {
            alert('Input storage height is more than critical storage height! Proceeding with calculations assuming Category 4...');
            updateFireParams_Storage(compNr,4);
        }
        else {
            updateFireParams_Storage(compNr,category_sc3);
        }
    });

    $("#pkg_typesc1").change(function()
    {
        console.log("pkg_typesc1");
        //First check storage height
        var storageheightVal = parseFloat(document.getElementById("storageheightsc1").value);
        console.log("storageheight");
        console.log(storageheightVal);

        if(storageheightVal === "" || isNaN(storageheightVal) ) {
            alert('Input storage height missing! Please enter storage height before checking this field...');
            return;
        }
        category_sc1 = Math.max(parseInt(document.getElementById("stored_goodssc1").value), parseInt(document.getElementById("pkg_typesc1").value));
        console.log("category");
        console.log(category_sc1);
        var compNr = 1;
        console.log("storageheightcritical");
        console.log(storageheight_critical[category_sc1-1]);
        if(parseFloat(storageheightVal) > parseFloat(storageheight_critical[category_sc1-1])) {
            alert('Input storage height is more than critical storage height! Proceeding with calculations assuming Category 4...');
            updateFireParams_Storage(compNr,4);
        }
        else {
            updateFireParams_Storage(compNr,category_sc1);
        }
    });

    $("#pkg_typesc2").change(function()
    {
        console.log("pkg_typesc2");
        //First check storage height
        var storageheightVal = parseFloat(document.getElementById("storageheightsc2").value);
        console.log("storageheight");
        console.log(storageheightVal);

        if(storageheightVal === "" || isNaN(storageheightVal) ) {
            alert('Input storage height missing! Please enter storage height before checking this field...');
            return;
        }
        category_sc2 = Math.max(parseInt(document.getElementById("stored_goodssc2").value), parseInt(document.getElementById("pkg_typesc2").value));
        console.log("category");
        console.log(category_sc2);
        var compNr = 2;
        console.log("storageheightcritical");
        console.log(storageheight_critical[category_sc2-1]);
        if(parseFloat(storageheightVal) > parseFloat(storageheight_critical[category_sc2-1])) {
            alert('Input storage height is more than critical storage height! Proceeding with calculations assuming Category 4...');
            updateFireParams_Storage(compNr,4);
        }
        else {
            updateFireParams_Storage(compNr,category_sc2);
        }
    });

    $("#pkg_typesc3").change(function()
    {
        console.log("pkg_typesc3");
        //First check storage height
        var storageheightVal = parseFloat(document.getElementById("storageheightsc3").value);
        console.log("storageheight");
        console.log(storageheightVal);

        if(storageheightVal === "" || isNaN(storageheightVal) ) {
            alert('Input storage height missing! Please enter storage height before checking this field...');
            return;
        }
        category_sc3 = Math.max(parseInt(document.getElementById("stored_goodssc3").value), parseInt(document.getElementById("pkg_typesc3").value));
        console.log("category");
        console.log(category_sc3);
        var compNr = 3;
        console.log("storageheightcritical");
        console.log(storageheight_critical[category_sc3-1]);
        if(parseFloat(storageheightVal) > parseFloat(storageheight_critical[category_sc3-1])) {
            alert('Input storage height is more than critical storage height! Proceeding with calculations assuming Category 4...');
            updateFireParams_Storage(compNr,4);
        }
        else {
            updateFireParams_Storage(compNr,category_sc3);
        }
    });
    
    async function wait(ms) {
        return new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      }


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
               document.getElementById('storage'+i+'display').style.display = 'none';

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

    //this function will update the fire params for categories till D4. For storage selection this function does nothing and other event handlers are activated.
    function updateFireParams_Normal() {
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
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('9m²');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('3 X 3m');
                    break;
                //Klein risico with Categorie 1 (N1)
                case 'Accumulatorenstations':
                case 'Beton':
                case 'Bewerking-tot-schuimwijn':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('12m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('9m²');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('3 X 3m');
                    break;
                //Normal risico with Categorie 2 (N2)
                case 'Accumulatorenfabrieken':
                case 'Ammoniakfabrieken(synthetisch)':
                case 'Asbest(fabrieken van voorwerpen)':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('18m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('20m²');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('4 X 4m');
                    break;
                //Normal risico with Categorie 3 (N3)
                case 'Bakelietfabrieken':
                case 'Banden voor brandopnemers en dgl.':
                case 'Banketbakerijnen':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('24m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('36msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('6 X 6m');
                    break;
                //Normal risico with Categorie 4 (N4)
                case 'Afval en lompen(textiel)':
                case 'Alcohol(stokerij, magazijnen, aftrekkerijnen van':
                case 'Azijnfabrieken':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('36m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('81msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('9 X 9m');
                    break;
                //High risico with Categorie 4 (D1)
                case 'Confectiewerkplaatsen':
                case 'Houtverkoling':
                case 'Hout(creosoteren)':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('36m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('81msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('9 X 9m');
                    break;
                //High risico with Categorie 4 (D2)
                case 'Vliegtuigloodsen':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('36m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('81msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('9 X 9m');
                    break;
                //High risico with Categorie 4 (D3)
                case 'Afvalvezels(bewerken van)':
                case 'Asfalt':
                case 'Bandenindustrie':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('36m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('81msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('9 X 9m');
                    break;
                //High risico with Categorie 4 (D4)
                case 'Acetyleen':
                case 'Celluloid':
                case 'Gassen in vloeibare toestand':
                    $("#sc"+arguments[i]+"display :input[name=Circumference]").val('36m');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Area]").val('81msq');
                    $("#sc"+arguments[i]+"display :input[name=Fire-Size]").val('9 X 9m');
                case 'Storage':
                    console.log("Storage...");
                    wait(4000);
                    console.log("still in switch case after the wait ");

                    break;
                default:
                  
            }
        }
    }

    function updateFireParams_Storage(compNr, categoryNr) {
        var i;
        console.log("updateFireParams_Storage");
        //console.log("compNr");
        //console.log(compNr);
        //console.log("categoryNr");
        //console.log(categoryNr);

            switch(categoryNr) {
                //Klein risico with Categorie 1
                case 1:
                    console.log("case 1 hit");
                    $("#sc"+compNr+"display :input[name=Circumference]").val('12m');
                    $("#sc"+compNr+"display :input[name=Fire-Area]").val('9msq');
                    $("#sc"+compNr+"display :input[name=Fire-Size]").val('3 X 3m');
                    break;
                //Klein risico with Categorie 2 
                case 2:
                    console.log("case 2 hit");
                    $("#sc"+compNr+"display :input[name=Circumference]").val('18m');
                    $("#sc"+compNr+"display :input[name=Fire-Area]").val('20msq');
                    $("#sc"+compNr+"display :input[name=Fire-Size]").val('4 X 4m');
                    break;
                //Normal risico with Categorie 3 
                case 3:
                    console.log("case 3 hit");
                    $("#sc"+compNr+"display :input[name=Circumference]").val('24m');
                    $("#sc"+compNr+"display :input[name=Fire-Area]").val('36msq');
                    $("#sc"+compNr+"display :input[name=Fire-Size]").val('6 X 6m');
                    break;
                //Normal risico with Categorie 4 
                case 4:
                    console.log("case 4 hit");
                    $("#sc"+compNr+"display :input[name=Circumference]").val('36m');
                    $("#sc"+compNr+"display :input[name=Fire-Area]").val('81msq');
                    $("#sc"+compNr+"display :input[name=Fire-Size]").val('9 X 9m');
                    break;

                default:
                    console.log("default hit");

                  
            }
        
    }


    //On selection of occupancy for any of the smoke compartments, results of categories are to be displayed.
    //Rather than button click, user selection changes the results.
    $(document).on('change', '#sc_occupancy_list1', (event) => {
        event.stopPropagation();
        console.log("chng sc1 selection");
        var sc_occ = $("#sc_occupancy_list1");
        if(sc_occ.val().trim() === ("Storage").valueOf()) {
            document.getElementById('storage1display').style.display = 'inline-block';
        }
        else {
            document.getElementById('storage1display').style.display = 'none';
        }
        updateFireParams_Normal(1);
    });

    $(document).on('change', '#sc_occupancy_list2', () => {
        console.log("chng sc2 selection");
        var sc_occ = $("#sc_occupancy_list2");
        if(sc_occ.val().trim() === ("Storage").valueOf()) {
            document.getElementById('storage2display').style.display = 'inline-block';
        }
        else {
            document.getElementById('storage2display').style.display = 'none';
        }
        updateFireParams_Normal(2);
    });

    $(document).on('change', '#sc_occupancy_list3', () => {
        console.log("chng sc3 selection");
        var sc_occ = $("#sc_occupancy_list3");
        if(sc_occ.val().trim() === ("Storage").valueOf()) {
            document.getElementById('storage3display').style.display = 'inline-block';
        }
        else {
            document.getElementById('storage3display').style.display = 'none';
        }
        updateFireParams_Normal(3);
    });

   // If the length of the element's string is 0 then display helper message 
   function requiredEmptyInputCheck(inputtx) 
   {
     //if (inputtx.val().length == 0)
     if (inputtx.value.length == 0)
      { 
         //alert("message");  	
         //alert("Missing required input : " + inputtx.attr('name'));
         alert("Missing required input : " + inputtx.getAttribute('name'));
         window.event.stopPropagation()
         return -2; 
      }  	
      return 0; 
    }

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

/*
//https://github.com/olifolkerd/tabulator/issues/666
    $('#resultpdfSave').click(function() {


        var elem = $("#restablsc1");
        var doc = new jsPDF('l', 'pt'); //set document to landscape, better for most tables
        //var res = doc.autoTableHtmlToJson(elem);
        var res = doc.autoTableHtmlToJson(elem[0]);
        doc.autoTable(res.columns, res.data, { 
            //additional autotable options go in here - see website for details
        })
        doc.save('myPDF.pdf');
    });
    */

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
            console.log(Hi);
            console.log(yankee);
            if(Hi > yankee - 0.5) 
                {alert("Check inlet height : Inlet Height must be <= (Y- 0.5)m"); return -1;}
            else
               return 0;
     }

     function chckSmScHeight() {
         console.log("chckSmScHeight");
        var HSC = arguments[0];
        var yankee  = arguments[1];
        console.log(HSC);
        console.log(yankee);
        if(HSC > yankee - 0.5) 
            {console.log("chckSmScHeightfail");alert("Check smoke screen height : smoke screen height must be <= (Y- 0.5)m"); return -1;}
        else
            return 0;
     }

     
   //event handler function when user clicks on button to get results of calculations     
   $('#ventCalculation').click(function (event) {
        console.log("Vent Calculation.");
        event = event || window.event;

        //if(($('#pname').val().trim() ===("").valueOf() )) {alert("Please enter a string for project name");event.stopPropagation();return;}
        //bootstrapValidate('#pname', 'required:Please enter a string for project name');
        var pnameElem = document.getElementById("pname");
        requiredEmptyInputCheck(pnameElem);

        //Get the number of smoke compartments selected by user in scnmbr
        var scnmbr = parseInt($('#smoke_compts').val());
        console.log("# of result bodies");
        console.log(scnmbr);
        if(scnmbr == 0) {alert("Please choose at least one smoke compartment");event.stopPropagation();return;}

        //perform height checks for height related input parameters from user
        for(let i=1;i<=3;i++) {
            console.log("Perform height checks");
            if(scnmbr >= i){

               console.log("Perform Air inlet check");
               var sc_occ = $("#sc_occupancy_list"+i);
               if(   (parseInt(sc_occ.val()) == 0)  || ( sc_occ.val().trim() ===("base").valueOf() )  || ( sc_occ.val().trim() ===("").valueOf() ) ) {
                console.log("sc occupancy not chosen !");
                alert("occupancy not chosen for compartment " + i);
                event.stopPropagation();
                return;
               }

               if(requiredEmptyInputCheck(document.getElementById('envtemp_sc'+i)) !== 0) {
                console.log("Temperature of surroundings empty !");
                event.stopPropagation();
                return;
               }

               if(requiredEmptyInputCheck(document.getElementById('areainlet_sc'+i)) !== 0) {
                console.log("Inlet Area empty !");
                event.stopPropagation();
                return;
               }

               if(requiredEmptyInputCheck(document.getElementById('heightvent_sc'+i)) !== 0) {
                console.log("Height of vent empty !");
                event.stopPropagation();
                return;
               }

               if(requiredEmptyInputCheck(document.getElementById('higthighairinlet_sc'+i)) !== 0) {
                    console.log("Air inlet height empty !");
                    event.stopPropagation();
                    return;
               }

               if(requiredEmptyInputCheck(document.getElementById('ci_sc'+i)) !== 0) {
                console.log("Height of vent empty !");
                event.stopPropagation();
                return;
               }

               if(requiredEmptyInputCheck(document.getElementById('yankee_sc'+i)) !== 0) {
                    console.log("Smoke free (Yankee) height empty !");
                    event.stopPropagation();
                    return;
               }

                if(requiredEmptyInputCheck(document.getElementById('heightsmkscrn_sc'+i)) !== 0) {
                    console.log("Yankee inlet height empty !");
                    event.stopPropagation();
                    return;
                }

                if((chckInletHeight(document.getElementById("higthighairinlet_sc"+i).value,document.getElementById("yankee_sc"+i).value)) !== 0) {
                    console.log("Air inlet height check fail !");
                    event.stopPropagation();
                    return;
                }
                else {
                    console.log("Air inlet height check pass ! Now check sc");
                }

                console.log("Perform Smoke screen check");

                if((chckSmScHeight(document.getElementById("heightsmkscrn_sc"+i).value,document.getElementById("yankee_sc"+i).value)) !== 0) {
                    console.log("Smoke screen height check fail !");
                    event.stopPropagation();
                    return;
                }

            }
        } //for loop to perform height checks for each smoke compartment height inputs
    

       if(scnmbr==0){
           document.getElementById('resultmodal').style.display = 'none';
       }
       else {
            //document.getElementById('resultmodal').style.display = 'block';
            updateModalSmokeCompts();
            document.getElementById('resultmodal').style.display = 'block';
       }//scnmbr !=0 else part ends
   
        console.log("smoke_compts validated");

        //Now let's store the form data in txt file on the django server
        var serializedData = $('#calcformnew').serialize();

        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
  
        function csrfSafeMethod(method) {
                    // these HTTP methods do not require CSRF protection
                    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
        }
     
        var csrftoken = getCookie('csrftoken');
        // Ajax Setup  
        $.ajaxSetup({
            beforeSend: function(xhr, settings) {
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                        xhr.setRequestHeader("X-CSRFToken", csrftoken);
                    }
                }
        });

        $.ajax({
            url: 'fesg_ajax_request/',
            method: 'POST', // or another (GET), whatever you need
            data: serializedData,

            success: function (data) {        
                // success callback
                // you can process data returned by function from views.py
                //alert("Your inputs are recorded !");
            }
        });

    }); //ventCalculation ends

    function updateModalSmokeCompts() {
        let n = parseInt($('#smoke_compts').val());

        for(let i=1;i<=3;i++) {
            if(n >= i){

                //Now do the calculations
                var pnameElem = document.getElementById("pname");
                var t0 = parseFloat($('#envtemp_sc'+i).val());
                var Mf = 0.188 * parseFloat($("#sc"+i+"display :input[name=Circumference]").val()) * Math.pow(parseFloat($('#yankee_sc'+i).val()), 1.5);
                var Qf = 0.8 * 250 * parseFloat($("#sc"+i+"display :input[name=Fire-Area]").val());
                var thetaC = ( (0.8 * 250 * parseFloat($("#sc"+i+"display :input[name=Fire-Area]").val()) )/ Mf);
                var db = parseFloat($('#heightvent_sc'+i).val()) - parseFloat($('#yankee_sc'+i).val());
                var Tc = 273 + parseFloat($('#envtemp_sc'+i).val()) + (  (0.8 * 250 * parseFloat($("#sc"+i+"display :input[name=Fire-Area]").val()) )/ Mf);
                console.log("Solve for Tc");
                console.log(Tc);
                var Tcsquared= Math.pow(Tc, 2);
                var T0= 273 + t0;
                //var D=2 * 9.81 * db * thetaC * T0;
                var Aisquared=Math.pow(parseFloat($('#areainlet_sc'+i).val()), 2);
                var Cisquared=Math.pow(parseFloat($('#ci_sc'+i).val()), 2);

                var sprinklerChoiceVal = document.getElementById("sprinklers_sc"+i).value;
                

                /*
                //sprinklers logic
                if(sprinklerChoiceVal === 0 || (sprinklerChoiceVal.trim() ===("typeNo").valueOf()) ){
                    console.log("no sprinkler logic");
           
                }
                else{
                    console.log("sprinkler logic");
                    var ts = parseFloat(document.getElementById("acttemp_sc"+i).value);
                    Qf = 0.5 * 250 * parseFloat($("#sc"+i+"display :input[name=Fire-Area]").val());


                    if(   (Qf/Mf) > (1.5*ts -t0)  ){
                        thetaC=1.5*ts -t0;
                    }
                    else{
                        thetaC = ( (0.5 * 250 * parseFloat($("#sc"+i+"display :input[name=Fire-Area]").val()) )/ Mf);

                    }
                    console.log("Use new thetaC and Qf");
                    console.log(thetaC);
                    console.log(Qf);
                }
                */
              
                var dbFixed = db.toFixed(2);
                var thetaCFixed = thetaC.toFixed(2);
                
                var C1 = Mf/1.225;
                console.log("Value of thetaCFixed:");
                console.log(thetaCFixed);
  
                var N=Tcsquared + T0*Tc;
                var D=2 * 9.81 * dbFixed * thetaCFixed * T0;

                var RHS_iter1 = (C1)*(  Math.sqrt(N/D) );
                console.log("Values of RHS_iter1");
                console.log(RHS_iter1);

                var AvCv_it1 = RHS_iter1;
                var AiCi_prod = parseFloat($('#areainlet_sc'+i).val()) * parseFloat($('#ci_sc'+i).val());
                var AvCv_new = AvCv_it1;
                var N_new;
                var AvCv_old;
                var delta = 1000;
                var delta_old;

                for(let i=1;i<=10;i++) {
                        if(delta >= 0.01){
                            //continue iteration
                            console.log("Value of AvCv_new:before iteration action");
                            console.log(AvCv_new);
                            AvCv_old = AvCv_new;
                            N_new = Tcsquared + (Math.pow(AvCv_new/AiCi_prod, 2)) *(T0*Tc);
                            AvCv_new  = (C1)*(  Math.sqrt(N_new/D) );
                            delta = AvCv_new - AvCv_old;

                            if(i>1){
                                if(delta > delta_old) {
                                    console.log("Delta did not decrease. Quit!");
                                    AvCv_new = "Not valid input params. Please check and re-enter !";
                                    break;
                                }

                            }
                            console.log("Value of delta");
                            console.log(delta);
                            console.log("Value of AvCv_new");
                            console.log(AvCv_new);
                            delta_old = delta;
            
                        }
                        else{
                            //reached final value of AvCv, exit iteration
                            //console.log("Exit iteration");
                            break;     
                        }
                    }
                // final iterated value
                var AvCv = AvCv_new;
                console.log("Final of AvCv_new");
                console.log(AvCv_new);

                var Av = AvCv / ( parseFloat($('#Cv_sc'+i).val()) );
                var AvCvkrit = 1.4 * Math.pow(dbFixed, 2);
                var Ac=parseFloat($('#areasc_sc'+i).val());
                var reqSmkVents_choice1 = Math.ceil(AvCv / AvCvkrit);
                var reqSmkVents_choice2 = Math.ceil(Ac / 400);
                var reqSmkVents = Math.max(reqSmkVents_choice1, reqSmkVents_choice2);
                console.log("reqSmkVents_choice1");
                console.log(reqSmkVents_choice1);

                console.log("reqSmkVents_choice2");
                console.log(reqSmkVents_choice2);

                var maxLenSingleExhaust = Math.min(3, dbFixed);
                var minEdgeToEdgeDistTwoVents;

                //edge to edge distance
                if(AvCv > AvCvkrit ){
                    console.log("edge to edge distance when AvCv > AvCvkrit");
                    minEdgeToEdgeDistTwoVents = 3 * dbFixed;
           
                }
                else{
                    console.log("edge to edge distance when AvCv <= AvCvkrit");
                    minEdgeToEdgeDistTwoVents = "Not applicable";
                 
                }

                
                if(isNaN(AvCv)){
                    AvCvdisplay = "Invalid. Please check the inputs !";
                    Avdisplay = "Invalid. Please check the inputs !";
                }
                else {
                    AvCvdisplay = AvCv.toFixed(1);
                    Avdisplay = Av.toFixed(1);
                }

                console.log("Update datatables for compartment");
                //if($.fn.dataTable.isDataTable( '#restablsc'+i )){$('#restablsc'+i).DataTable.destroy();}
                //Now update the modals for each smoke compartment
                    // Refer : https://datatables.net/manual/data/
                    // https://datatables.net/manual/tech-notes/3
                    //https://datatables.net/extensions/buttons/examples/html5/pdfPage.html
                    $('#restablsc'+i).DataTable( {
                        //retrieve: true,
                        destroy: true,
                        dom: 'Bfrtip',
                        buttons: [
                            {
                                extend: 'pdfHtml5',
                                title : "Project:"+pnameElem.value+"_"+"Results for smoke compartment"+i,
                                orientation: 'landscape',
                                pageSize: 'LEGAL'
                            }
                        ],
                        
                        data: [
                            new OutNatVents( "A. Omtrek brandhaard", "Wf", "m", parseFloat($("#sc"+i+"display :input[name=Circumference]").val()) ),
                            new OutNatVents( "B. Oppervlakte brandhaard", "Af", "m²", parseFloat($("#sc"+i+"display :input[name=Fire-Area]").val()) ),
                            new OutNatVents( "C. Warmtevermogen per oppervlakteeenheid", "qf", "kW/m²", 250),
                            new OutNatVents( "D. Convectieve warmtestroom", "Qf", "kW", Qf ),
                            new OutNatVents( "E. Omgevingstemperatuur", "t0", "°C", parseInt($('#envtemp_sc'+i).val()) ),
                            new OutNatVents( "F. Hoogte onder de zoldering", "Hc", "m", parseFloat($('#heightvent_sc'+i).val()) ),
                            new OutNatVents( "G. Rookvrije hoogte", "Y", "m", parseFloat($('#yankee_sc'+i).val()) ),
                            new OutNatVents( "H. Dikte rooklaag", "db", "m", parseFloat($('#heightvent_sc'+i).val()) - parseFloat($('#yankee_sc'+i).val()) ),
                            new OutNatVents( "I. Geometrische toevoeroppervlakte", "Ai", "m²", parseFloat($('#areainlet_sc'+i).val()) ),
                            new OutNatVents( "J. Aerodynamische coefficient toevoer", "C_i", "", parseFloat($('#ci_sc'+i).val()) ),
                            //new OutNatVents( "K. Rookmassastroom", "Mf", "m", Mf.toFixed(2) ),
                            //new OutNatVents( "Het verschil thetaC", "ThetaC", "", thetaC ),
                            new OutNatVents( "K. Gemiddelde temperatuur van de rooklaag", "tc", "°C", (Tc - 273).toFixed(2) ),
                            new OutNatVents( "L. Oppervlakte van de rookluiken", "AvCv", "m²", AvCvdisplay),
                            new OutNatVents( "M. Geometrische afvoeroppervlakte", "Av", "m²", Avdisplay),
                            //new OutNatVents( "Aerodynamische oppervlakte", "AvCvkrit", "m²", AvCvkrit.toFixed(1)),
                            new OutNatVents( "N. Aantal rookafvoerpunten", "", "", reqSmkVents),
                            new OutNatVents( "O. Maximale lengte van een verluchter", "", "m", maxLenSingleExhaust),
                            //new OutNatVents( "Minimale rand tot rand afstand tussen elk afvoerpunt", "Dmin", "m", minEdgeToEdgeDistTwoVents),
                            //new OutNatVents( "Maximale tussenafstand", "", "m", 20),
                       
                        ],
                        columns: [
                            { data: 'paramName' },
                            { data: 'paramSymbol' },
                            { data: 'paramUnit' },
                            { data: 'paramVal' }
                        ]

                    } ); // end of DataTable

                    //$('#restablsc'+i).DataTable.rows( { order: 'applied' } ).data();

            }
            else{ //zero smoke compartments


            }
        }//end:for loop to update modal
    } //end:updateModalSmokeCompts

    /*
    var table = $('#restablsc1').DataTable();
    $('#restablsc'+1).on( 'order.dt', function () {
        // This will show: "Ordering on column 1 (asc)", for example
        var order = table.order();
        $('#orderInfo').html( 'Ordering on column '+order[0][0]+' ('+order[0][1]+')' );
    } );
    */
 
        
}); //document ready ends