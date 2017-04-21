//// citation: code for zooming map: https://bl.ocks.org/mbostock/2206590 
			.background {
			  fill: none;
			  pointer-events: all;
			}

			svg.append("rect")
		    .attr("class", "background")
		    .attr("width", width)
		    .attr("height", height)
		    .on("click", clicked);


			function clicked1(d) {
			  var x, y, k;

			  if (d && centered1 !== d) {
			    var centroid = pathGenerator1.centroid(d);
			    x = centroid[0];
			    y = centroid[1];
			    k = 4;
			    centered1 = d;
			  } else {
			    x = width / 2;
			    y = height / 2;
			    k = 1;
			    centered1 = null;
			  }

			  gg.selectAll("path")
			      .classed("active", centered1 && function(d) { return d === centered1; });

			  gg.transition()
			      .duration(750)
			      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
			      .style("stroke-width", 1.5 / k + "px");
			}

//citation: tooltip http://bl.ocks.org/michellechandra/0b2ce4923dc9b5809922

				div.tooltip {   
				    position: absolute;           
				    text-align: center;           
				    width: 120px;                  
				    height: 40px;                 
				    padding: 2px;             
				    font: 12px sans-serif;        
				    background: white;   
				    border: 0px;      
				    border-radius: 8px;           
				    pointer-events: none;         
				}

				var div = d3.select("body")
			    .append("div")   
			    .attr("class", "tooltip")               
			    .style("opacity", 0);



			    .on("mouseover", function () {
			            //d3.select(this).attr("r", 12);
			            div.transition()        
			            .duration(200)      
			            .style("opacity", .9);      
			            div.text(d.AllUniversity2011_INSTNM + '\n' + salaryProb + '\n' )
			                .style("left", (d3.event.pageX) + "px")     
			                .style("top", (d3.event.pageY - 28) + "px");
			        })
			        .on("mouseout", function(){
			            //d3.select(this).attr("r", 5);
			            div.transition()        
			            .duration(500)      
			            .style("opacity", 0);  
			        })
			        .transition().duration(1000)
			        .attr("fill",potionColor)
			        .attr("r", Number(salaryProb * 20));


//citation: code for tab https://www.w3schools.com/howto/howto_js_tabs.asp
			function changeYrAfterEntry(evt, value) {
			    tablinks = document.getElementsByClassName("tablinks");
			    for (i = 0; i < tablinks.length; i++) {
			        tablinks[i].className = tablinks[i].className.replace(" active", "");
			    }
			    yrAfterEntry = value;
			    d3.selectAll('.circleForTuitionSalary').remove();
			    previousCircleData = showMapCircle(previousCircleData, svg_salary);
			    evt.currentTarget.className += " active";
			}



				/*slider CSS generated from: http://www.cssportal.com/style-input-range/*/
				input[type=range] {
				  -webkit-appearance: none;
				  margin: 10px 0;
				  width: 100%;
				}
				input[type=range]:focus {
				  outline: none;
				}
				input[type=range]::-webkit-slider-runnable-track {
				  width: 100%;
				  height: 7px;
				  cursor: pointer;
				  animate: 0.2s;
				  box-shadow: 1px 1px 1px #ADADAD;
				  background: #9cbfd6;
				  border-radius: 9px;
				  border: 0px solid #010101;
				}
				input[type=range]::-webkit-slider-thumb {
				  box-shadow: 1px 1px 1px #79929C;
				  border: 1px solid #6BABC2;
				  height: 25px;
				  width: 37px;
				  border-radius: 9px;
				  background: #FFFFFF;
				  cursor: pointer;
				  -webkit-appearance: none;
				  margin-top: -9.5px;
				}
				input[type=range]:focus::-webkit-slider-runnable-track {
				  background: #A7C2D4;
				}
				input[type=range]::-moz-range-track {
				  width: 100%;
				  height: 7px;
				  cursor: pointer;
				  animate: 0.2s;
				  box-shadow: 1px 1px 1px #ADADAD;
				  background: #A7C2D4;
				  border-radius: 9px;
				  border: 0px solid #010101;
				}
				input[type=range]::-moz-range-thumb {
				  box-shadow: 1px 1px 1px #79929C;
				  border: 1px solid #6BABC2;
				  height: 25px;
				  width: 37px;
				  border-radius: 9px;
				  background: #FFFFFF;
				  cursor: pointer;
				}
				input[type=range]::-ms-track {
				  width: 100%;
				  height: 7px;
				  cursor: pointer;
				  animate: 0.2s;
				  background: transparent;
				  border-color: transparent;
				  color: transparent;
				}
				input[type=range]::-ms-fill-lower {
				  background: #A7C2D4;
				  border: 0px solid #010101;
				  border-radius: 18px;
				  box-shadow: 1px 1px 1px #ADADAD;
				}
				input[type=range]::-ms-fill-upper {
				  background: #A7C2D4;
				  border: 0px solid #010101;
				  border-radius: 18px;
				  box-shadow: 1px 1px 1px #ADADAD;
				}
				input[type=range]::-ms-thumb {
				  box-shadow: 1px 1px 1px #79929C;
				  border: 1px solid #6BABC2;
				  height: 25px;
				  width: 37px;
				  border-radius: 9px;
				  background: #FFFFFF;
				  cursor: pointer;
				}
				input[type=range]:focus::-ms-fill-lower {
				  background: #A7C2D4;
				}
				input[type=range]:focus::-ms-fill-upper {
				  background: #A7C2D4;
				}
				/* style code reference: https://www.w3schools.com/howto/howto_js_tabs.asp */
				/* Style the tab */
				div.tab {
				    width: 800px;
				    overflow: hidden;
				    border: 1px solid #ccc;
				    background-color: #f1f1f1;
				}

				/* Style the buttons inside the tab */
				div.tab button {
				    width: 266.6px;
				    background-color: inherit;
				    float: left;
				    border: none;
				    outline: none;
				    cursor: pointer;
				    padding: 14px 16px;
				    transition: 0.3s;
				}

				/* Change background color of buttons on hover */
				div.tab button:hover {
				    background-color: #ddd;
				}

				/* Create an active/current tablink class */
				div.tab button.active {
				    background-color: #ccc;
				}

				/* Style the tab content */
				.tabcontent {
				    display: none;
				    padding: 6px 12px;
				    border: 1px solid #ccc;
				    border-top: none;
				}

				#legend1 {
					position: absolute;
					margin-top: -525px;
					margin-left: 810px;
				}
