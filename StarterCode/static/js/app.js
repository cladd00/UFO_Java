// from data.js
var tableData = data;
var tableufo = d3.select("tbody");
// YOUR CODE HERE!
data.forEach(function(UFOReport){
    console.log(UFOReport);
    var row = tableufo.append("tr");
    Object.entries(UFOReport).forEach(function([key,value]){
        console.log(key,value);
        var cell = tableufo.append("td");
        cell.text('\xa0\xa0\xa0\xa0\xa0' + value);
    });
});

var listgroup = d3.select("select");
var listvalued = "datetime";
listgroup.on("change", ()=>{
    let placeholder = d3.select("#datetime");
    let labelname = d3.select("label")
    if (listgroup.property('value') == "city"){
        labelname.html("Enter a City");
        listvalued = "city";
        document.getElementById('datetime').value =="";
        placeholder.attr('placeholder',"benton");

        }
        else if (listgroup.property('value') == "state"){
            labelname.html("Enter a State");
            listvalued = "state";
            document.getElementById('datetime').value = "";
            placeholder.attr('placeholder',"ca");
        }
        else if (listgroup.property('value') == "country"){
            labelname.html("Enter a Country");
            listvalued = "country";
            document.getElementById('datetime').value == "";
            placeholder.attr('placeholder',"1/11/2011");
        }
        else if (listgroup.property('value') == "shape"){
            labelname.html("Enter a Shape");
            listvalued = "shape";
            document.getElementById('datetime').value = "";
            placeholder.attr('placeholder',"circle");
        }
});

var submit = d3.select("#filter-btn");
submit.on("click", () =>{
    let marqueelist = d3.select(".hero");
    d3.event.preventDefault();

    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property('value');
    console.log(tableData);
    let filteredData = tableData.filter(tableData => tableData[listvalued] == inputValue);
    var tableufofilter = d3.select("tbody").html("");

    if (filteredData.length==0){
        var row = tabluefofilter.append("tr");
        var cell = tableufofilter.append("td");
        cell.text("\xa0\xa0\xa0\xa0\xa0 No UFO file found");
    }

    else {
        let listufo = "";
        d3.selectALl("marquee").remove();
        filteredData.forEach(function(UFOReport){
            var row = tableufofilter.append("tr");
            Object.entries(UFOReport).forEach(function([key,value]){
                var cell = tableufofilter.append("td");
                cell.text('\xa0\xa0\xa0\xa0\xa0'+ value);
            if (key == "city"){
                value = value.chaAt(0).toUpperCase() + value.slice(1) + " " + key + ",";
                key = "at"
            }
            else if (key == "state"){
                key ="";
                value = value.charAt(0).toUpperCase()+value.slice(1)+",";
            }
            else if (key == "country"){
                key="";
                value = value.toUpperCase();
            }
            else if (key == "datetime"){
                key = key.charAt(0).toUpperCase()+key.slice(1)+":";
                value=value;
            }
            listufo = listufo + "       "+key+"         "+value;
        });
        listufo=listufo+ "\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
    });
    var lists = marqueelist.append("marquee");
    var list1 = marqueelist.append("marquee");
    list1.append("img")
    .attr('width',200)
    .attr('height',150)
    .attr("src","static/images/Al.gif");
    lists.text(listufo);

    d3.selectAll("marquee").attr('onmouseover','this.stop()');
    d3.selectAll("marquee").attr('onmouseout','this.start()');
    d3.selectAll("marquee").attr('scrollamount','3');
        }
    
});
