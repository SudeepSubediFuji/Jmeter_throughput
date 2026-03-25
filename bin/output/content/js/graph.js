/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 26423.0, "series": [{"data": [[0.0, 4.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 5.0], [0.5, 5.0], [0.6, 5.0], [0.7, 5.0], [0.8, 5.0], [0.9, 5.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 6.0], [5.3, 6.0], [5.4, 6.0], [5.5, 6.0], [5.6, 6.0], [5.7, 6.0], [5.8, 6.0], [5.9, 6.0], [6.0, 6.0], [6.1, 6.0], [6.2, 6.0], [6.3, 6.0], [6.4, 6.0], [6.5, 6.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 6.0], [8.5, 6.0], [8.6, 6.0], [8.7, 6.0], [8.8, 6.0], [8.9, 6.0], [9.0, 6.0], [9.1, 6.0], [9.2, 7.0], [9.3, 7.0], [9.4, 7.0], [9.5, 7.0], [9.6, 7.0], [9.7, 7.0], [9.8, 7.0], [9.9, 7.0], [10.0, 7.0], [10.1, 7.0], [10.2, 7.0], [10.3, 7.0], [10.4, 7.0], [10.5, 7.0], [10.6, 7.0], [10.7, 7.0], [10.8, 7.0], [10.9, 7.0], [11.0, 7.0], [11.1, 7.0], [11.2, 7.0], [11.3, 7.0], [11.4, 7.0], [11.5, 7.0], [11.6, 7.0], [11.7, 7.0], [11.8, 7.0], [11.9, 7.0], [12.0, 7.0], [12.1, 7.0], [12.2, 7.0], [12.3, 7.0], [12.4, 7.0], [12.5, 7.0], [12.6, 7.0], [12.7, 7.0], [12.8, 7.0], [12.9, 7.0], [13.0, 7.0], [13.1, 7.0], [13.2, 7.0], [13.3, 7.0], [13.4, 7.0], [13.5, 7.0], [13.6, 7.0], [13.7, 7.0], [13.8, 7.0], [13.9, 7.0], [14.0, 7.0], [14.1, 7.0], [14.2, 7.0], [14.3, 7.0], [14.4, 7.0], [14.5, 7.0], [14.6, 7.0], [14.7, 7.0], [14.8, 7.0], [14.9, 8.0], [15.0, 8.0], [15.1, 8.0], [15.2, 8.0], [15.3, 8.0], [15.4, 8.0], [15.5, 8.0], [15.6, 8.0], [15.7, 8.0], [15.8, 8.0], [15.9, 8.0], [16.0, 8.0], [16.1, 8.0], [16.2, 8.0], [16.3, 8.0], [16.4, 8.0], [16.5, 8.0], [16.6, 8.0], [16.7, 8.0], [16.8, 8.0], [16.9, 8.0], [17.0, 8.0], [17.1, 8.0], [17.2, 8.0], [17.3, 8.0], [17.4, 8.0], [17.5, 8.0], [17.6, 8.0], [17.7, 8.0], [17.8, 8.0], [17.9, 8.0], [18.0, 8.0], [18.1, 8.0], [18.2, 8.0], [18.3, 8.0], [18.4, 8.0], [18.5, 8.0], [18.6, 8.0], [18.7, 8.0], [18.8, 8.0], [18.9, 8.0], [19.0, 8.0], [19.1, 8.0], [19.2, 8.0], [19.3, 8.0], [19.4, 8.0], [19.5, 8.0], [19.6, 8.0], [19.7, 8.0], [19.8, 8.0], [19.9, 8.0], [20.0, 8.0], [20.1, 8.0], [20.2, 8.0], [20.3, 8.0], [20.4, 8.0], [20.5, 8.0], [20.6, 8.0], [20.7, 8.0], [20.8, 8.0], [20.9, 9.0], [21.0, 9.0], [21.1, 9.0], [21.2, 9.0], [21.3, 9.0], [21.4, 9.0], [21.5, 9.0], [21.6, 9.0], [21.7, 9.0], [21.8, 9.0], [21.9, 9.0], [22.0, 9.0], [22.1, 9.0], [22.2, 9.0], [22.3, 9.0], [22.4, 9.0], [22.5, 9.0], [22.6, 9.0], [22.7, 9.0], [22.8, 9.0], [22.9, 9.0], [23.0, 9.0], [23.1, 9.0], [23.2, 9.0], [23.3, 9.0], [23.4, 9.0], [23.5, 9.0], [23.6, 9.0], [23.7, 9.0], [23.8, 9.0], [23.9, 9.0], [24.0, 9.0], [24.1, 10.0], [24.2, 10.0], [24.3, 10.0], [24.4, 10.0], [24.5, 10.0], [24.6, 10.0], [24.7, 10.0], [24.8, 10.0], [24.9, 10.0], [25.0, 10.0], [25.1, 10.0], [25.2, 10.0], [25.3, 10.0], [25.4, 10.0], [25.5, 10.0], [25.6, 10.0], [25.7, 10.0], [25.8, 10.0], [25.9, 10.0], [26.0, 10.0], [26.1, 10.0], [26.2, 10.0], [26.3, 10.0], [26.4, 10.0], [26.5, 10.0], [26.6, 10.0], [26.7, 10.0], [26.8, 10.0], [26.9, 10.0], [27.0, 10.0], [27.1, 10.0], [27.2, 10.0], [27.3, 11.0], [27.4, 11.0], [27.5, 11.0], [27.6, 11.0], [27.7, 11.0], [27.8, 11.0], [27.9, 11.0], [28.0, 11.0], [28.1, 11.0], [28.2, 11.0], [28.3, 11.0], [28.4, 11.0], [28.5, 11.0], [28.6, 11.0], [28.7, 11.0], [28.8, 11.0], [28.9, 11.0], [29.0, 11.0], [29.1, 11.0], [29.2, 11.0], [29.3, 11.0], [29.4, 11.0], [29.5, 11.0], [29.6, 11.0], [29.7, 11.0], [29.8, 11.0], [29.9, 11.0], [30.0, 11.0], [30.1, 11.0], [30.2, 11.0], [30.3, 11.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 13.0], [31.2, 13.0], [31.3, 13.0], [31.4, 13.0], [31.5, 13.0], [31.6, 13.0], [31.7, 13.0], [31.8, 13.0], [31.9, 13.0], [32.0, 13.0], [32.1, 13.0], [32.2, 15.0], [32.3, 15.0], [32.4, 15.0], [32.5, 15.0], [32.6, 18.0], [32.7, 18.0], [32.8, 18.0], [32.9, 27.0], [33.0, 27.0], [33.1, 27.0], [33.2, 27.0], [33.3, 27.0], [33.4, 27.0], [33.5, 27.0], [33.6, 27.0], [33.7, 27.0], [33.8, 27.0], [33.9, 27.0], [34.0, 399.0], [34.1, 399.0], [34.2, 399.0], [34.3, 479.0], [34.4, 479.0], [34.5, 479.0], [34.6, 479.0], [34.7, 520.0], [34.8, 520.0], [34.9, 520.0], [35.0, 742.0], [35.1, 742.0], [35.2, 742.0], [35.3, 742.0], [35.4, 815.0], [35.5, 815.0], [35.6, 815.0], [35.7, 966.0], [35.8, 966.0], [35.9, 966.0], [36.0, 966.0], [36.1, 1045.0], [36.2, 1045.0], [36.3, 1045.0], [36.4, 1047.0], [36.5, 1047.0], [36.6, 1047.0], [36.7, 1047.0], [36.8, 1050.0], [36.9, 1050.0], [37.0, 1050.0], [37.1, 1050.0], [37.2, 1072.0], [37.3, 1072.0], [37.4, 1072.0], [37.5, 1074.0], [37.6, 1074.0], [37.7, 1074.0], [37.8, 1074.0], [37.9, 1082.0], [38.0, 1082.0], [38.1, 1082.0], [38.2, 1084.0], [38.3, 1084.0], [38.4, 1084.0], [38.5, 1084.0], [38.6, 1196.0], [38.7, 1196.0], [38.8, 1196.0], [38.9, 1336.0], [39.0, 1336.0], [39.1, 1336.0], [39.2, 1336.0], [39.3, 1345.0], [39.4, 1345.0], [39.5, 1345.0], [39.6, 1362.0], [39.7, 1362.0], [39.8, 1362.0], [39.9, 1362.0], [40.0, 1364.0], [40.1, 1364.0], [40.2, 1364.0], [40.3, 1398.0], [40.4, 1398.0], [40.5, 1398.0], [40.6, 1398.0], [40.7, 1444.0], [40.8, 1444.0], [40.9, 1444.0], [41.0, 1468.0], [41.1, 1468.0], [41.2, 1468.0], [41.3, 1468.0], [41.4, 1495.0], [41.5, 1495.0], [41.6, 1495.0], [41.7, 1573.0], [41.8, 1573.0], [41.9, 1573.0], [42.0, 1573.0], [42.1, 1624.0], [42.2, 1624.0], [42.3, 1624.0], [42.4, 1624.0], [42.5, 1642.0], [42.6, 1642.0], [42.7, 1642.0], [42.8, 1740.0], [42.9, 1740.0], [43.0, 1740.0], [43.1, 1740.0], [43.2, 1820.0], [43.3, 1820.0], [43.4, 1820.0], [43.5, 1843.0], [43.6, 1843.0], [43.7, 1843.0], [43.8, 1843.0], [43.9, 1855.0], [44.0, 1855.0], [44.1, 1855.0], [44.2, 1904.0], [44.3, 1904.0], [44.4, 1904.0], [44.5, 1904.0], [44.6, 1970.0], [44.7, 1970.0], [44.8, 1970.0], [44.9, 1994.0], [45.0, 1994.0], [45.1, 1994.0], [45.2, 1994.0], [45.3, 2068.0], [45.4, 2068.0], [45.5, 2068.0], [45.6, 2096.0], [45.7, 2096.0], [45.8, 2096.0], [45.9, 2096.0], [46.0, 2133.0], [46.1, 2133.0], [46.2, 2133.0], [46.3, 2193.0], [46.4, 2193.0], [46.5, 2193.0], [46.6, 2193.0], [46.7, 2251.0], [46.8, 2251.0], [46.9, 2251.0], [47.0, 2454.0], [47.1, 2454.0], [47.2, 2454.0], [47.3, 2454.0], [47.4, 2474.0], [47.5, 2474.0], [47.6, 2474.0], [47.7, 2474.0], [47.8, 2558.0], [47.9, 2558.0], [48.0, 2558.0], [48.1, 2588.0], [48.2, 2588.0], [48.3, 2588.0], [48.4, 2588.0], [48.5, 2702.0], [48.6, 2702.0], [48.7, 2702.0], [48.8, 2720.0], [48.9, 2720.0], [49.0, 2720.0], [49.1, 2720.0], [49.2, 2964.0], [49.3, 2964.0], [49.4, 2964.0], [49.5, 2981.0], [49.6, 2981.0], [49.7, 2981.0], [49.8, 2981.0], [49.9, 3019.0], [50.0, 3019.0], [50.1, 3019.0], [50.2, 3105.0], [50.3, 3105.0], [50.4, 3105.0], [50.5, 3105.0], [50.6, 3189.0], [50.7, 3189.0], [50.8, 3189.0], [50.9, 3275.0], [51.0, 3275.0], [51.1, 3275.0], [51.2, 3275.0], [51.3, 3464.0], [51.4, 3464.0], [51.5, 3464.0], [51.6, 3595.0], [51.7, 3595.0], [51.8, 3595.0], [51.9, 3595.0], [52.0, 3697.0], [52.1, 3697.0], [52.2, 3697.0], [52.3, 3725.0], [52.4, 3725.0], [52.5, 3725.0], [52.6, 3725.0], [52.7, 3865.0], [52.8, 3865.0], [52.9, 3865.0], [53.0, 3865.0], [53.1, 4000.0], [53.2, 4000.0], [53.3, 4000.0], [53.4, 4224.0], [53.5, 4224.0], [53.6, 4224.0], [53.7, 4224.0], [53.8, 4503.0], [53.9, 4503.0], [54.0, 4503.0], [54.1, 4509.0], [54.2, 4509.0], [54.3, 4509.0], [54.4, 4509.0], [54.5, 4514.0], [54.6, 4514.0], [54.7, 4514.0], [54.8, 5280.0], [54.9, 5280.0], [55.0, 5280.0], [55.1, 5280.0], [55.2, 5397.0], [55.3, 5397.0], [55.4, 5397.0], [55.5, 5509.0], [55.6, 5509.0], [55.7, 5509.0], [55.8, 5509.0], [55.9, 5516.0], [56.0, 5516.0], [56.1, 5516.0], [56.2, 5698.0], [56.3, 5698.0], [56.4, 5698.0], [56.5, 5698.0], [56.6, 5933.0], [56.7, 5933.0], [56.8, 5933.0], [56.9, 6400.0], [57.0, 6400.0], [57.1, 6400.0], [57.2, 6400.0], [57.3, 6418.0], [57.4, 6418.0], [57.5, 6418.0], [57.6, 6565.0], [57.7, 6565.0], [57.8, 6565.0], [57.9, 6565.0], [58.0, 6733.0], [58.1, 6733.0], [58.2, 6733.0], [58.3, 6733.0], [58.4, 7360.0], [58.5, 7360.0], [58.6, 7360.0], [58.7, 7411.0], [58.8, 7411.0], [58.9, 7411.0], [59.0, 7411.0], [59.1, 7472.0], [59.2, 7472.0], [59.3, 7472.0], [59.4, 8057.0], [59.5, 8057.0], [59.6, 8057.0], [59.7, 8057.0], [59.8, 8140.0], [59.9, 8140.0], [60.0, 8140.0], [60.1, 8681.0], [60.2, 8681.0], [60.3, 8681.0], [60.4, 8681.0], [60.5, 8701.0], [60.6, 8701.0], [60.7, 8701.0], [60.8, 8846.0], [60.9, 8846.0], [61.0, 8846.0], [61.1, 8846.0], [61.2, 8883.0], [61.3, 8883.0], [61.4, 8883.0], [61.5, 9098.0], [61.6, 9098.0], [61.7, 9098.0], [61.8, 9098.0], [61.9, 9111.0], [62.0, 9111.0], [62.1, 9111.0], [62.2, 9305.0], [62.3, 9305.0], [62.4, 9305.0], [62.5, 9305.0], [62.6, 9506.0], [62.7, 9506.0], [62.8, 9506.0], [62.9, 9665.0], [63.0, 9665.0], [63.1, 9665.0], [63.2, 9665.0], [63.3, 9788.0], [63.4, 9788.0], [63.5, 9788.0], [63.6, 9788.0], [63.7, 10331.0], [63.8, 10331.0], [63.9, 10331.0], [64.0, 10416.0], [64.1, 10416.0], [64.2, 10416.0], [64.3, 10416.0], [64.4, 10455.0], [64.5, 10455.0], [64.6, 10455.0], [64.7, 10456.0], [64.8, 10456.0], [64.9, 10456.0], [65.0, 10456.0], [65.1, 11083.0], [65.2, 11083.0], [65.3, 11083.0], [65.4, 11254.0], [65.5, 11254.0], [65.6, 11254.0], [65.7, 11254.0], [65.8, 11300.0], [65.9, 11300.0], [66.0, 11300.0], [66.1, 11616.0], [66.2, 11616.0], [66.3, 11616.0], [66.4, 11616.0], [66.5, 11923.0], [66.6, 11923.0], [66.7, 11923.0], [66.8, 12043.0], [66.9, 12043.0], [67.0, 12043.0], [67.1, 12043.0], [67.2, 12073.0], [67.3, 12073.0], [67.4, 12073.0], [67.5, 12073.0], [67.6, 12073.0], [67.7, 12073.0], [67.8, 12073.0], [67.9, 12587.0], [68.0, 12587.0], [68.1, 12587.0], [68.2, 12828.0], [68.3, 12828.0], [68.4, 12828.0], [68.5, 12828.0], [68.6, 13521.0], [68.7, 13521.0], [68.8, 13521.0], [68.9, 13521.0], [69.0, 13801.0], [69.1, 13801.0], [69.2, 13801.0], [69.3, 14031.0], [69.4, 14031.0], [69.5, 14031.0], [69.6, 14031.0], [69.7, 14055.0], [69.8, 14055.0], [69.9, 14055.0], [70.0, 14062.0], [70.1, 14062.0], [70.2, 14062.0], [70.3, 14062.0], [70.4, 14067.0], [70.5, 14067.0], [70.6, 14067.0], [70.7, 14609.0], [70.8, 14609.0], [70.9, 14609.0], [71.0, 14609.0], [71.1, 14860.0], [71.2, 14860.0], [71.3, 14860.0], [71.4, 15037.0], [71.5, 15037.0], [71.6, 15037.0], [71.7, 15037.0], [71.8, 15051.0], [71.9, 15051.0], [72.0, 15051.0], [72.1, 15159.0], [72.2, 15159.0], [72.3, 15159.0], [72.4, 15159.0], [72.5, 15472.0], [72.6, 15472.0], [72.7, 15472.0], [72.8, 15494.0], [72.9, 15494.0], [73.0, 15494.0], [73.1, 15494.0], [73.2, 15587.0], [73.3, 15587.0], [73.4, 15587.0], [73.5, 15763.0], [73.6, 15763.0], [73.7, 15763.0], [73.8, 15763.0], [73.9, 15800.0], [74.0, 15800.0], [74.1, 15800.0], [74.2, 15800.0], [74.3, 15874.0], [74.4, 15874.0], [74.5, 15874.0], [74.6, 15960.0], [74.7, 15960.0], [74.8, 15960.0], [74.9, 15960.0], [75.0, 15961.0], [75.1, 15961.0], [75.2, 15961.0], [75.3, 16267.0], [75.4, 16267.0], [75.5, 16267.0], [75.6, 16267.0], [75.7, 16313.0], [75.8, 16313.0], [75.9, 16313.0], [76.0, 16409.0], [76.1, 16409.0], [76.2, 16409.0], [76.3, 16409.0], [76.4, 16430.0], [76.5, 16430.0], [76.6, 16430.0], [76.7, 16450.0], [76.8, 16450.0], [76.9, 16450.0], [77.0, 16450.0], [77.1, 16828.0], [77.2, 16828.0], [77.3, 16828.0], [77.4, 16830.0], [77.5, 16830.0], [77.6, 16830.0], [77.7, 16830.0], [77.8, 16889.0], [77.9, 16889.0], [78.0, 16889.0], [78.1, 17218.0], [78.2, 17218.0], [78.3, 17218.0], [78.4, 17218.0], [78.5, 17222.0], [78.6, 17222.0], [78.7, 17222.0], [78.8, 17476.0], [78.9, 17476.0], [79.0, 17476.0], [79.1, 17476.0], [79.2, 17583.0], [79.3, 17583.0], [79.4, 17583.0], [79.5, 17583.0], [79.6, 17659.0], [79.7, 17659.0], [79.8, 17659.0], [79.9, 17679.0], [80.0, 17679.0], [80.1, 17679.0], [80.2, 17679.0], [80.3, 17709.0], [80.4, 17709.0], [80.5, 17709.0], [80.6, 17761.0], [80.7, 17761.0], [80.8, 17761.0], [80.9, 17761.0], [81.0, 17834.0], [81.1, 17834.0], [81.2, 17834.0], [81.3, 17841.0], [81.4, 17841.0], [81.5, 17841.0], [81.6, 17841.0], [81.7, 17976.0], [81.8, 17976.0], [81.9, 17976.0], [82.0, 18027.0], [82.1, 18027.0], [82.2, 18027.0], [82.3, 18027.0], [82.4, 18120.0], [82.5, 18120.0], [82.6, 18120.0], [82.7, 18320.0], [82.8, 18320.0], [82.9, 18320.0], [83.0, 18320.0], [83.1, 18343.0], [83.2, 18343.0], [83.3, 18343.0], [83.4, 18472.0], [83.5, 18472.0], [83.6, 18472.0], [83.7, 18472.0], [83.8, 18509.0], [83.9, 18509.0], [84.0, 18509.0], [84.1, 18727.0], [84.2, 18727.0], [84.3, 18727.0], [84.4, 18727.0], [84.5, 18790.0], [84.6, 18790.0], [84.7, 18790.0], [84.8, 18790.0], [84.9, 18951.0], [85.0, 18951.0], [85.1, 18951.0], [85.2, 19122.0], [85.3, 19122.0], [85.4, 19122.0], [85.5, 19122.0], [85.6, 19186.0], [85.7, 19186.0], [85.8, 19186.0], [85.9, 19497.0], [86.0, 19497.0], [86.1, 19497.0], [86.2, 19497.0], [86.3, 19788.0], [86.4, 19788.0], [86.5, 19788.0], [86.6, 19993.0], [86.7, 19993.0], [86.8, 19993.0], [86.9, 19993.0], [87.0, 20262.0], [87.1, 20262.0], [87.2, 20262.0], [87.3, 20275.0], [87.4, 20275.0], [87.5, 20275.0], [87.6, 20275.0], [87.7, 20280.0], [87.8, 20280.0], [87.9, 20280.0], [88.0, 20287.0], [88.1, 20287.0], [88.2, 20287.0], [88.3, 20287.0], [88.4, 20698.0], [88.5, 20698.0], [88.6, 20698.0], [88.7, 21103.0], [88.8, 21103.0], [88.9, 21103.0], [89.0, 21103.0], [89.1, 21180.0], [89.2, 21180.0], [89.3, 21180.0], [89.4, 21186.0], [89.5, 21186.0], [89.6, 21186.0], [89.7, 21186.0], [89.8, 21218.0], [89.9, 21218.0], [90.0, 21218.0], [90.1, 21218.0], [90.2, 21283.0], [90.3, 21283.0], [90.4, 21283.0], [90.5, 21303.0], [90.6, 21303.0], [90.7, 21303.0], [90.8, 21303.0], [90.9, 21996.0], [91.0, 21996.0], [91.1, 21996.0], [91.2, 22251.0], [91.3, 22251.0], [91.4, 22251.0], [91.5, 22251.0], [91.6, 22277.0], [91.7, 22277.0], [91.8, 22277.0], [91.9, 22307.0], [92.0, 22307.0], [92.1, 22307.0], [92.2, 22307.0], [92.3, 22943.0], [92.4, 22943.0], [92.5, 22943.0], [92.6, 22949.0], [92.7, 22949.0], [92.8, 22949.0], [92.9, 22949.0], [93.0, 23189.0], [93.1, 23189.0], [93.2, 23189.0], [93.3, 23245.0], [93.4, 23245.0], [93.5, 23245.0], [93.6, 23245.0], [93.7, 23342.0], [93.8, 23342.0], [93.9, 23342.0], [94.0, 23550.0], [94.1, 23550.0], [94.2, 23550.0], [94.3, 23550.0], [94.4, 23618.0], [94.5, 23618.0], [94.6, 23618.0], [94.7, 23702.0], [94.8, 23702.0], [94.9, 23702.0], [95.0, 23702.0], [95.1, 23708.0], [95.2, 23708.0], [95.3, 23708.0], [95.4, 23708.0], [95.5, 24724.0], [95.6, 24724.0], [95.7, 24724.0], [95.8, 24875.0], [95.9, 24875.0], [96.0, 24875.0], [96.1, 24875.0], [96.2, 25055.0], [96.3, 25055.0], [96.4, 25055.0], [96.5, 25145.0], [96.6, 25145.0], [96.7, 25145.0], [96.8, 25145.0], [96.9, 25203.0], [97.0, 25203.0], [97.1, 25203.0], [97.2, 25356.0], [97.3, 25356.0], [97.4, 25356.0], [97.5, 25356.0], [97.6, 25473.0], [97.7, 25473.0], [97.8, 25473.0], [97.9, 25700.0], [98.0, 25700.0], [98.1, 25700.0], [98.2, 25700.0], [98.3, 25841.0], [98.4, 25841.0], [98.5, 25841.0], [98.6, 25894.0], [98.7, 25894.0], [98.8, 25894.0], [98.9, 25894.0], [99.0, 26202.0], [99.1, 26202.0], [99.2, 26202.0], [99.3, 26332.0], [99.4, 26332.0], [99.5, 26332.0], [99.6, 26332.0], [99.7, 26423.0], [99.8, 26423.0], [99.9, 26423.0], [100.0, 26423.0]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 96.0, "series": [{"data": [[0.0, 96.0], [300.0, 1.0], [400.0, 1.0], [500.0, 1.0], [700.0, 1.0], [800.0, 1.0], [900.0, 1.0], [1000.0, 7.0], [1100.0, 1.0], [1300.0, 5.0], [1400.0, 3.0], [1500.0, 1.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 3.0], [1900.0, 3.0], [2000.0, 2.0], [2100.0, 2.0], [2200.0, 1.0], [2400.0, 2.0], [2500.0, 2.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 2.0], [3200.0, 1.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [4000.0, 1.0], [4200.0, 1.0], [4500.0, 3.0], [5200.0, 1.0], [5300.0, 1.0], [5500.0, 2.0], [5600.0, 1.0], [5900.0, 1.0], [6400.0, 2.0], [6500.0, 1.0], [6700.0, 1.0], [7400.0, 2.0], [7300.0, 1.0], [8000.0, 1.0], [8100.0, 1.0], [8700.0, 1.0], [8600.0, 1.0], [8800.0, 2.0], [9000.0, 1.0], [9100.0, 1.0], [9500.0, 1.0], [9300.0, 1.0], [9700.0, 1.0], [9600.0, 1.0], [10300.0, 1.0], [10400.0, 3.0], [11000.0, 1.0], [11200.0, 1.0], [11600.0, 1.0], [11300.0, 1.0], [12000.0, 3.0], [11900.0, 1.0], [12500.0, 1.0], [12800.0, 1.0], [13500.0, 1.0], [13800.0, 1.0], [14000.0, 4.0], [14800.0, 1.0], [14600.0, 1.0], [15000.0, 2.0], [15100.0, 1.0], [15500.0, 1.0], [15800.0, 2.0], [15700.0, 1.0], [15400.0, 2.0], [15900.0, 2.0], [16300.0, 1.0], [16200.0, 1.0], [16800.0, 3.0], [17200.0, 2.0], [17400.0, 1.0], [16400.0, 3.0], [17600.0, 2.0], [17800.0, 2.0], [18400.0, 1.0], [17700.0, 2.0], [18000.0, 1.0], [18100.0, 1.0], [17500.0, 1.0], [18300.0, 2.0], [17900.0, 1.0], [19100.0, 2.0], [18900.0, 1.0], [18500.0, 1.0], [18700.0, 2.0], [19400.0, 1.0], [19700.0, 1.0], [20200.0, 4.0], [19900.0, 1.0], [20600.0, 1.0], [21200.0, 2.0], [21100.0, 3.0], [21300.0, 1.0], [22200.0, 2.0], [21900.0, 1.0], [22300.0, 1.0], [22900.0, 2.0], [23300.0, 1.0], [23500.0, 1.0], [23200.0, 1.0], [23100.0, 1.0], [23600.0, 1.0], [23700.0, 2.0], [24700.0, 1.0], [25000.0, 1.0], [25300.0, 1.0], [24800.0, 1.0], [25200.0, 1.0], [25100.0, 1.0], [25400.0, 1.0], [26300.0, 1.0], [25800.0, 2.0], [26200.0, 1.0], [26400.0, 1.0], [25700.0, 1.0]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 26400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 146.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 20.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 116.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 146.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 64.57142857142856, "minX": 1.77434052E12, "maxY": 100.0, "series": [{"data": [[1.7743407E12, 99.64885496183207], [1.77434052E12, 100.0], [1.77434064E12, 100.0], [1.77434076E12, 64.57142857142856], [1.77434058E12, 100.0]], "isOverall": false, "label": "OllamaThreadGroup", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77434076E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 6.0, "minX": 42.0, "maxY": 26423.0, "series": [{"data": [[42.0, 19819.5], [43.0, 14067.0], [45.0, 19497.0], [46.0, 12302.0], [48.0, 12681.0], [51.0, 12398.0], [53.0, 12543.166666666668], [52.0, 22307.0], [54.0, 17348.0], [58.0, 15267.666666666666], [73.0, 3189.0], [77.0, 21909.333333333332], [80.0, 14495.800000000001], [85.0, 25700.0], [88.0, 25894.0], [95.0, 26423.0], [92.0, 25145.0], [99.0, 7.0], [98.0, 23245.0], [97.0, 6.0], [100.0, 5986.2951541850225]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}, {"data": [[93.70318021201412, 7816.692579505303]], "isOverall": false, "label": "HTTP リクエスト-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.77434052E12, "maxY": 5931.833333333333, "series": [{"data": [[1.7743407E12, 5931.833333333333], [1.77434052E12, 89.36666666666666], [1.77434064E12, 2667.7166666666667], [1.77434076E12, 2184.3166666666666], [1.77434058E12, 2085.2166666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7743407E12, 486.3666666666667], [1.77434052E12, 3.683333333333333], [1.77434064E12, 226.58333333333334], [1.77434076E12, 0.0], [1.77434058E12, 152.11666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77434076E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 399.0, "minX": 1.77434052E12, "maxY": 14832.959183673469, "series": [{"data": [[1.7743407E12, 9907.045801526723], [1.77434052E12, 399.0], [1.77434064E12, 1384.0655737704917], [1.77434076E12, 14832.959183673469], [1.77434058E12, 2503.8780487804875]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77434076E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 397.0, "minX": 1.77434052E12, "maxY": 9030.67175572519, "series": [{"data": [[1.7743407E12, 9030.67175572519], [1.77434052E12, 397.0], [1.77434064E12, 436.0983606557377], [1.77434076E12, 952.8571428571429], [1.77434058E12, 1611.3170731707319]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77434076E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.8852459016393444, "minX": 1.77434052E12, "maxY": 53.0, "series": [{"data": [[1.7743407E12, 0.9694656488549613], [1.77434052E12, 53.0], [1.77434064E12, 0.8852459016393444], [1.77434076E12, 0.9183673469387754], [1.77434058E12, 1.073170731707317]], "isOverall": false, "label": "HTTP リクエスト", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77434076E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 479.0, "minX": 1.77434058E12, "maxY": 26423.0, "series": [{"data": [[1.7743407E12, 26423.0], [1.77434064E12, 5280.0], [1.77434058E12, 17222.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7743407E12, 5397.0], [1.77434064E12, 520.0], [1.77434058E12, 479.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7743407E12, 25233.600000000002], [1.77434064E12, 3727.3000000000006], [1.77434058E12, 16337.599999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7743407E12, 26423.0], [1.77434064E12, 5280.0], [1.77434058E12, 17222.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7743407E12, 17583.0], [1.77434064E12, 1982.0], [1.77434058E12, 1846.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7743407E12, 25924.8], [1.77434064E12, 4552.299999999997], [1.77434058E12, 17172.05]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7743407E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 7.0, "minX": 1.0, "maxY": 18073.5, "series": [{"data": [[2.0, 6565.0], [1.0, 4257.0], [4.0, 15373.0], [3.0, 13174.5], [7.0, 18073.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 10.0], [2.0, 8.0], [4.0, 8.0], [3.0, 7.0], [49.0, 15472.0], [7.0, 8.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 17222.5, "series": [{"data": [[2.0, 4629.0], [1.0, 1882.5], [4.0, 13759.0], [3.0, 11410.5], [7.0, 17222.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 9.0], [2.0, 7.0], [4.0, 7.0], [3.0, 7.0], [49.0, 0.0], [7.0, 8.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.77434052E12, "maxY": 2.8333333333333335, "series": [{"data": [[1.7743407E12, 2.8333333333333335], [1.77434052E12, 0.05], [1.77434064E12, 1.1833333333333333], [1.77434058E12, 0.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7743407E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77434052E12, "maxY": 1.2833333333333334, "series": [{"data": [[1.7743407E12, 1.2833333333333334], [1.77434064E12, 0.6333333333333333], [1.77434058E12, 0.36666666666666664]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7743407E12, 0.9], [1.77434052E12, 0.016666666666666666], [1.77434064E12, 0.38333333333333336], [1.77434058E12, 0.31666666666666665]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.77434076E12, 0.8166666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77434076E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77434052E12, "maxY": 1.2833333333333334, "series": [{"data": [[1.7743407E12, 0.9], [1.77434052E12, 0.016666666666666666], [1.77434064E12, 0.38333333333333336], [1.77434076E12, 0.8166666666666667], [1.77434058E12, 0.31666666666666665]], "isOverall": false, "label": "HTTP リクエスト-failure", "isController": false}, {"data": [[1.7743407E12, 1.2833333333333334], [1.77434064E12, 0.6333333333333333], [1.77434058E12, 0.36666666666666664]], "isOverall": false, "label": "HTTP リクエスト-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77434076E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77434052E12, "maxY": 1.2833333333333334, "series": [{"data": [[1.7743407E12, 1.2833333333333334], [1.77434064E12, 0.6333333333333333], [1.77434058E12, 0.36666666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7743407E12, 0.9], [1.77434052E12, 0.016666666666666666], [1.77434064E12, 0.38333333333333336], [1.77434076E12, 0.8166666666666667], [1.77434058E12, 0.31666666666666665]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77434076E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

