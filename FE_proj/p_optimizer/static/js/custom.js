
$(document).ready(function () {

    menu_active();
    if (window.location.href.split('/')[3] == 'Cluster_Analysis') {
        n_sizeChartDraw();
        n_barChartDraw();
        n_marriageChartDraw();
        n_barChartDraw_edu();

        jongsa_sizeChartDraw();
        jongsa_barChartDraw();
        jongsa_marriageChartDraw();
        jongsa_barChartDraw_edu();
        jongsa_stayChartDraw();

        job_sizeChartDraw();
        job_barChartDraw();
        job_marriageChartDraw();
        job_barChartDraw_edu();
        job_stayChartDraw();

        multi_sizeChartDraw();
        multi_barChartDraw();
        multi_marriageChartDraw();
        multi_barChartDraw_edu();
        multi_stayChartDraw();

        $('.n_otherbtn-marr').click(function () {
            if ($(this).attr('value') == 'Cluster1') {
                n_marriageChartData.datasets[0].data = [0, 0, 1, 195, 140];
                n_marriageChart.options.title.text = '21차시 Cluster1의 혼인상태 분포'
                n_marriageChart.update();

            }
            else if ($(this).attr('value') == 'Cluster2') {
                n_marriageChartData.datasets[0].data = [277, 1797, 7, 3, 0];
                n_marriageChart.options.title.text = '21차시 Cluster2 의 혼인상태 분포'
                n_marriageChart.update();
            }
            else if ($(this).attr('value') == 'Cluster3') {
                n_marriageChartData.datasets[0].data = [32, 1072, 16, 0, 0];
                n_marriageChart.options.title.text = '21차시 Cluster3 의 혼인상태 분포'
                n_marriageChart.update();
            }
            else if ($(this).attr('value') == 'Cluster4') {
                n_marriageChartData.datasets[0].data = [87, 1328, 18, 51, 0];
                n_marriageChart.options.title.text = '21차시 Cluster4 의 혼인상태 분포'
                n_marriageChart.update();
            }
        });

        $('input[name="jongsa_ratio_radio"]').change(function () {
            if ($(this).attr('id') == 'jongsa_ratio_radio12') {
                jongsa_barChartData.datasets[0].data = [0.38, 0.7, 0.76, 0.1, 0.73];
                jongsa_barChartData.datasets[1].data = [0.303, 0.715, 0.598, 0.333, 0.177];
                jongsa_barChartData.datasets[2].data = [0.242, 0.851, 0.684, 0.333, 0.177];
                jongsa_barChart.options.title.text = '12차시 성별, 국민연금가입, 정규직 비율 분포'
                jongsa_barChart.update();
            }
            else {
                jongsa_barChartData.datasets[0].data = [0.38, 0.7, 0.76, 0.1, 0.73];
                jongsa_barChartData.datasets[1].data = [0.514, 0.74, 0.382, 0.5, 0.244];
                jongsa_barChartData.datasets[2].data = [0.242, 0.851, 0.333, 0.177, 0.514];
                jongsa_barChart.options.title.text = '21차시 성별, 국민연금가입, 정규직 비율 분포'
                jongsa_barChart.update();
            }
        });
        $('input[name="jongsa_marriage_radio"]').change(function () {
            if ($(this).attr('id') == 'jongsa_marriage_radio12') {
                jongsa_marriageChartData.datasets[0].data = [25, 139, 6, 16, 20];
                jongsa_marriageChart.options.title.text = '12차시 Cluster1 의 혼인상태 분포'
                jongsa_marriageChart.update();
            } else {
                jongsa_marriageChartData.datasets[0].data = [16, 135, 3, 26, 26];
                jongsa_marriageChart.options.title.text = '21차시 Cluster1 의 혼인상태 분포'
                jongsa_marriageChart.update();
            }
        });
        $('input[name="jongsa_edu_radio"]').change(function () {
            if ($(this).attr('id') == 'jongsa_edu_radio12') {
                jongsa_barChartData_edu.datasets[0].data = [0.75, 0.42, 0.74, 0.94, 0.96];
                jongsa_barChartData_edu.datasets[1].data = [0.09, 0.21, 0.09, 0.03, 0.01];
                jongsa_barChartData_edu.datasets[2].data = [0.14, 0.3, 0.15, 0.021, 0.03];
                jongsa_barChartData_edu.datasets[3].data = [0.025, 0.06, 0.023, 0.009, 0];
                jongsa_barChart_edu.options.title.text = '12차시 최종학력 분포'
                jongsa_barChart_edu.update();
            } else {
                jongsa_barChartData_edu.datasets[0].data = [0.75, 0.42, 0.74, 0.94, 0.96];
                jongsa_barChartData_edu.datasets[1].data = [0.09, 0.2, 0.09, 0.03, 0.02];
                jongsa_barChartData_edu.datasets[2].data = [0.13, 0.3, 0.15, 0.02, 0.03];
                jongsa_barChartData_edu.datasets[3].data = [0.03, 0.08, 0.027, 0.009, 0];
                jongsa_barChart_edu.options.title.text = '21차시 최종학력 분포'
                jongsa_barChart_edu.update();
            }
        });
        $('.jongsa_otherbtn-marr').click(function () {
            if ($('input[name="jongsa_marriage_radio"]:checked').attr('id') == 'jongsa_marriage_radio12' &&
                $(this).attr('value') == 'Cluster1') {
                jongsa_marriageChartData.datasets[0].data = [25, 139, 6, 16, 20];
                jongsa_marriageChart.options.title.text = '12차시 Cluster1의 혼인상태 분포'
                jongsa_marriageChart.update();

            }
            else if ($('input[name="jongsa_marriage_radio"]:checked').attr('id') == 'jongsa_marriage_radio12' &&
                $(this).attr('value') == 'Cluster2') {
                jongsa_marriageChartData.datasets[0].data = [275, 1255, 8, 44, 23];
                jongsa_marriageChart.options.title.text = '12차시 Cluster2 의 혼인상태 분포'
                jongsa_marriageChart.update();
            }
            else if ($('input[name="jongsa_marriage_radio"]:checked').attr('id') == 'jongsa_marriage_radio12' &&
                $(this).attr('value') == 'Cluster3') {
                jongsa_marriageChartData.datasets[0].data = [60, 878, 3, 49, 52];
                jongsa_marriageChart.options.title.text = '12차시 Cluster3 의 혼인상태 분포'
                jongsa_marriageChart.update();
            }
            else if ($('input[name="jongsa_marriage_radio"]:checked').attr('id') == 'jongsa_marriage_radio12' &&
                $(this).attr('value') == 'Cluster4') {
                jongsa_marriageChartData.datasets[0].data = [2, 225, 1, 0, 3];
                jongsa_marriageChart.options.title.text = '12차시 Cluster4 의 혼인상태 분포'
                jongsa_marriageChart.update();
            }
            else if ($('input[name="jongsa_marriage_radio"]:checked').attr('id') == 'jongsa_marriage_radio12' &&
                $(this).attr('value') == 'Cluster5') {
                jongsa_marriageChartData.datasets[0].data = [12, 143, 5, 16, 7];
                jongsa_marriageChart.options.title.text = '12차시 Cluster5 의 혼인상태 분포'
                jongsa_marriageChart.update();
            }
            else if ($('input[name="jongsa_marriage_radio"]:checked').attr('id') == 'jongsa_marriage_radio21' &&
                $(this).attr('value') == 'Cluster1') {
                jongsa_marriageChartData.datasets[0].data = [16, 135, 3, 26, 26];
                jongsa_marriageChart.options.title.text = '21차시 Cluster1 의 혼인상태 분포'
                jongsa_marriageChart.update();
            }
            else if ($('input[name="jongsa_marriage_radio"]:checked').attr('id') == 'jongsa_marriage_radio21' &&
                $(this).attr('value') == 'Cluster2') {
                jongsa_marriageChartData.datasets[0].data = [118, 1372, 9, 73, 33];
                jongsa_marriageChart.options.title.text = '21차시 Cluster2 의 혼인상태 분포'
                jongsa_marriageChart.update();
            }
            else if ($('input[name="jongsa_marriage_radio"]:checked').attr('id') == 'jongsa_marriage_radio21' &&
                $(this).attr('value') == 'Cluster3') {
                jongsa_marriageChartData.datasets[0].data = [38, 852, 9, 65, 78];
                jongsa_marriageChart.options.title.text = '21차시 Cluster3 의 혼인상태 분포'
                jongsa_marriageChart.update();
            }
            else if ($('input[name="jongsa_marriage_radio"]:checked').attr('id') == 'jongsa_marriage_radio21' &&
                $(this).attr('value') == 'Cluster4') {
                jongsa_marriageChartData.datasets[0].data = [2, 218, 1, 2, 8];
                jongsa_marriageChart.options.title.text = '21차시 Cluster4 의 혼인상태 분포'
                jongsa_marriageChart.update();
            }
            else {
                jongsa_marriageChartData.datasets[0].data = [8, 135, 7, 18, 8];
                jongsa_marriageChart.options.title.text = '21차시 Cluster5 의 혼인상태 분포'
                jongsa_marriageChart.update();
            }
        });
        $('input[name="jongsa_stay_radio"]').change(function () {
            if ($(this).attr('id') == 'jongsa_stay_radio12') {
                jongsa_stayChartData.datasets[0].data = [46, 10, 11, 10, 7, 7, 6, 49, 5, 8, 7, 14, 8, 11, 7, 0, 0, 0, 0];
                jongsa_stayChart.options.title.text = '12차시 Cluster1 의 거주지역 분포'
                jongsa_stayChart.update();
            } else {
                jongsa_stayChartData.datasets[0].data = [45, 9, 12, 8, 6, 6, 5, 48, 5, 8, 8, 15, 9, 12, 8, 0, 0, 0, 2];
                jongsa_stayChart.options.title.text = '21차시 Cluster1 의 거주지역 분포'
                jongsa_stayChart.update();
            }
        });
        $('.jongsa_otherbtn-stay').click(function () {
            if ($('input[name="jongsa_stay_radio"]:checked').attr('id') == 'jongsa_stay_radio12' &&
                $(this).attr('value') == 'Cluster1') {
                jongsa_stayChartData.datasets[0].data = [46, 10, 11, 10, 7, 7, 6, 49, 5, 8, 7, 14, 8, 11, 7, 0, 0, 0, 0];
                jongsa_stayChart.options.title.text = '12차시 Cluster1의 거주지역 분포'
                jongsa_stayChart.update();

            }
            else if ($('input[name="jongsa_stay_radio"]:checked').attr('id') == 'jongsa_stay_radio12' &&
                $(this).attr('value') == 'Cluster2') {
                jongsa_stayChartData.datasets[0].data = [282, 125, 77, 49, 124, 37, 85, 376, 29, 52, 60, 52, 38, 68, 143, 8, 0, 0, 0];
                jongsa_stayChart.options.title.text = '12차시 Cluster2 의 거주지역 분포'
                jongsa_stayChart.update();
            }
            else if ($('input[name="jongsa_stay_radio"]:checked').attr('id') == 'jongsa_stay_radio12' &&
                $(this).attr('value') == 'Cluster3') {
                jongsa_stayChartData.datasets[0].data = [144, 87, 50, 24, 73, 23, 25, 185, 38, 43, 67, 55, 70, 58, 92, 8, 0, 0, 0];
                jongsa_stayChart.options.title.text = '12차시 Cluster3 의 거주지역 분포'
                jongsa_stayChart.update();
            }
            else if ($('input[name="jongsa_stay_radio"]:checked').attr('id') == 'jongsa_stay_radio12' &&
                $(this).attr('value') == 'Cluster4') {
                jongsa_stayChartData.datasets[0].data = [22, 17, 7, 2, 10, 4, 4, 36, 13, 9, 28, 15, 22, 19, 17, 6];
                jongsa_stayChart.options.title.text = '12차시 Cluster4 의 거주지역 분포'
                jongsa_stayChart.update();
            }
            else if ($('input[name="jongsa_stay_radio"]:checked').attr('id') == 'jongsa_stay_radio12' &&
                $(this).attr('value') == 'Cluster5') {
                jongsa_stayChartData.datasets[0].data = [34, 24, 6, 2, 8, 3, 3, 42, 3, 9, 9, 11, 10, 5, 13, 1, 0, 0, 0];
                jongsa_stayChart.options.title.text = '12차시 Cluster5 의 거주지역 분포'
                jongsa_stayChart.update();
            }
            else if ($('input[name="jongsa_stay_radio"]:checked').attr('id') == 'jongsa_stay_radio21' &&
                $(this).attr('value') == 'Cluster1') {
                jongsa_stayChartData.datasets[0].data = [45, 9, 12, 8, 6, 6, 5, 48, 5, 8, 8, 15, 9, 12, 8, 0, 0, 0, 2];
                jongsa_stayChart.options.title.text = '21차시 Cluster1 의 거주지역 분포'
                jongsa_stayChart.update();
            }
            else if ($('input[name="jongsa_stay_radio"]:checked').attr('id') == 'jongsa_stay_radio21' &&
                $(this).attr('value') == 'Cluster2') {
                jongsa_stayChartData.datasets[0].data = [259, 123, 76, 42, 124, 38, 84, 380, 35, 54, 69, 53, 38, 62, 147, 8, 0, 0, 13];
                jongsa_stayChart.options.title.text = '21차시 Cluster2 의 거주지역 분포'
                jongsa_stayChart.update();
            }
            else if ($('input[name="jongsa_stay_radio"]:checked').attr('id') == 'jongsa_stay_radio21' &&
                $(this).attr('value') == 'Cluster3') {
                jongsa_stayChartData.datasets[0].data = [126, 82, 50, 21, 71, 23, 26, 202, 37, 42, 65, 59, 71, 59, 94, 8, 0, 0, 6];
                jongsa_stayChart.options.title.text = '21차시 Cluster3 의 거주지역 분포'
                jongsa_stayChart.update();
            }
            else if ($('input[name="jongsa_stay_radio"]:checked').attr('id') == 'jongsa_stay_radio21' &&
                $(this).attr('value') == 'Cluster4') {
                jongsa_stayChartData.datasets[0].data = [19, 17, 7, 3, 10, 4, 4, 38, 13, 8, 28, 15, 23, 19, 17, 6, 0, 0, 0];
                jongsa_stayChart.options.title.text = '21차시 Cluster4 의 거주지역 분포'
                jongsa_stayChart.update();
            }
            else {
                jongsa_stayChartData.datasets[0].data = [33, 22, 6, 2, 8, 3, 3, 41, 3, 9, 9, 12, 11, 5, 15, 1, 0, 0, 0];
                jongsa_stayChart.options.title.text = '21차시 Cluster5 의 거주지역 분포'
                jongsa_stayChart.update();
            }
        });

        $('input[name="job_ratio_radio"]').change(function () {
            if ($(this).attr('id') == 'job_ratio_radio12') {
                job_barChartData.datasets[0].data = [0.54, 0.65, 0.69, 0.22, 0.11];
                job_barChartData.datasets[1].data = [0.408, 0.728, 0.382, 0.401, 0.523];
                job_barChartData.datasets[2].data = [0.408, 0.902, 0.382, 0.391, 0.523];
                job_barChart.options.title.text = '12차시 성별, 국민연금가입, 정규직 비율 분포'
                job_barChart.update();
            }
            else {
                job_barChartData.datasets[0].data = [0.54, 0.65, 0.69, 0.22, 0.11];
                job_barChartData.datasets[1].data = [0.435, 0.766, 0.282, 0.378, 0.414];
                job_barChartData.datasets[2].data = [0.1, 0.940, 0.242, 0.196, 0.345];
                job_barChart.options.title.text = '21차시 성별, 국민연금가입, 정규직 비율 분포'
                job_barChart.update();
            }
        });
        $('input[name="job_marriage_radio"]').change(function () {
            if ($(this).attr('id') == 'job_marriage_radio12') {
                job_marriageChartData.datasets[0].data = [130, 769, 23, 68, 51];
                job_marriageChart.options.title.text = '12차시 Cluster1 의 혼인상태 분포'
                job_marriageChart.update();
            } else {
                job_marriageChartData.datasets[0].data = [89, 749, 19, 100, 84];
                job_marriageChart.options.title.text = '21차시 Cluster1 의 혼인상태 분포'
                job_marriageChart.update();
            }
        });
        $('input[name="job_edu_radio"]').change(function () {
            if ($(this).attr('id') == 'job_edu_radio12') {
                job_barChartData_edu.datasets[0].data = [0.8, 0.41, 0.76, 0.8, 0.88];
                job_barChartData_edu.datasets[1].data = [0.09, 0.21, 0.08, 0.08, 0.06];
                job_barChartData_edu.datasets[2].data = [0.09, 0.23, 0.15, 0.12, 0.06];
                job_barChartData_edu.datasets[3].data = [0.011, 0.059, 0.012, 0.011, 0.006];
                job_barChart_edu.options.title.text = '12차시 최종학력 분포'
                job_barChart_edu.update();
            } else {
                job_barChartData_edu.datasets[0].data = [0.8, 0.4, 0.76, 0.74, 0.88];
                job_barChartData_edu.datasets[1].data = [0.1, 0.32, 0.08, 0.09, 0.06];
                job_barChartData_edu.datasets[2].data = [0.09, 0.32, 0.15, 0.14, 0.05];
                job_barChartData_edu.datasets[3].data = [0.022, 0.07, 0.024, 0.022, 0.008];
                job_barChart_edu.options.title.text = '21차시 최종학력 분포'
                job_barChart_edu.update();
            }
        });
        $('.job_otherbtn-marr').click(function () {
            if ($('input[name="job_marriage_radio"]:checked').attr('id') == 'job_marriage_radio12' &&
                $(this).attr('value') == 'Cluster1') {
                job_marriageChartData.datasets[0].data = [130, 769, 23, 68, 51];
                job_marriageChart.options.title.text = '12차시 Cluster1의 혼인상태 분포'
                job_marriageChart.update();

            }
            else if ($('input[name="job_marriage_radio"]:checked').attr('id') == 'job_marriage_radio12' &&
                $(this).attr('value') == 'Cluster2') {
                job_marriageChartData.datasets[0].data = [530, 1551, 11, 64, 35];
                job_marriageChart.options.title.text = '12차시 Cluster2 의 혼인상태 분포'
                job_marriageChart.update();
            }
            else if ($('input[name="job_marriage_radio"]:checked').attr('id') == 'job_marriage_radio12' &&
                $(this).attr('value') == 'Cluster3') {
                job_marriageChartData.datasets[0].data = [74, 1175, 6, 58, 105];
                job_marriageChart.options.title.text = '12차시 Cluster3 의 혼인상태 분포'
                job_marriageChart.update();
            }
            else if ($('input[name="job_marriage_radio"]:checked').attr('id') == 'job_marriage_radio12' &&
                $(this).attr('value') == 'Cluster4') {
                job_marriageChartData.datasets[0].data = [347, 2496, 20, 113, 510];
                job_marriageChart.options.title.text = '12차시 Cluster4 의 혼인상태 분포'
                job_marriageChart.update();
            }
            else if ($('input[name="job_marriage_radio"]:checked').attr('id') == 'job_marriage_radio12' &&
                $(this).attr('value') == 'Cluster5') {
                job_marriageChartData.datasets[0].data = [5, 349, 1, 0, 7];
                job_marriageChart.options.title.text = '12차시 Cluster5 의 혼인상태 분포'
                job_marriageChart.update();
            }
            else if ($('input[name="job_marriage_radio"]:checked').attr('id') == 'job_marriage_radio21' &&
                $(this).attr('value') == 'Cluster1') {
                job_marriageChartData.datasets[0].data = [89, 749, 19, 100, 84];
                job_marriageChart.options.title.text = '21차시 Cluster1 의 혼인상태 분포'
                job_marriageChart.update();
            }
            else if ($('input[name="job_marriage_radio"]:checked').attr('id') == 'job_marriage_radio21' &&
                $(this).attr('value') == 'Cluster2') {
                job_marriageChartData.datasets[0].data = [260, 1764, 13, 109, 45];
                job_marriageChart.options.title.text = '21차시 Cluster2 의 혼인상태 분포'
                job_marriageChart.update();
            }
            else if ($('input[name="job_marriage_radio"]:checked').attr('id') == 'job_marriage_radio21' &&
                $(this).attr('value') == 'Cluster3') {
                job_marriageChartData.datasets[0].data = [49, 1124, 13, 77, 155];
                job_marriageChart.options.title.text = '21차시 Cluster3 의 혼인상태 분포'
                job_marriageChart.update();
            }
            else if ($('input[name="job_marriage_radio"]:checked').attr('id') == 'job_marriage_radio21' &&
                $(this).attr('value') == 'Cluster4') {
                job_marriageChartData.datasets[0].data = [24, 2364, 12, 142, 727];
                job_marriageChart.options.title.text = '21차시 Cluster4 의 혼인상태 분포'
                job_marriageChart.update();
            }
            else {
                job_marriageChartData.datasets[0].data = [2, 338, 1, 2, 19];
                job_marriageChart.options.title.text = '21차시 Cluster5 의 혼인상태 분포'
                job_marriageChart.update();
            }
        });
        $('input[name="job_stay_radio"]').change(function () {
            if ($(this).attr('id') == 'job_stay_radio12') {
                job_stayChartData.datasets[0].data = [191, 83, 49, 32, 59, 23, 33, 238, 21, 45, 59, 46, 33, 46, 78, 5, 0, 0, 0];
                job_stayChart.options.title.text = '12차시 Cluster1 의 거주지역 분포'
                job_stayChart.update();
            } else {
                job_stayChartData.datasets[0].data = [179, 83, 47, 31, 59, 25, 32, 243, 22, 43, 61, 50, 35, 44, 80, 5, 0, 0, 2];
                job_stayChart.options.title.text = '21차시 Cluster1 의 거주지역 분포'
                job_stayChart.update();
            }
        });
        $('.job_otherbtn-stay').click(function () {
            if ($('input[name="job_stay_radio"]:checked').attr('id') == 'job_stay_radio12' &&
                $(this).attr('value') == 'Cluster1') {
                job_stayChartData.datasets[0].data = [191, 86, 49, 32, 59, 23, 33, 238, 21, 45, 59, 46, 33, 46, 78, 5, 0, 0, 0];
                job_stayChart.options.title.text = '12차시 Cluster1의 거주지역 분포'
                job_stayChart.update();

            }
            else if ($('input[name="job_stay_radio"]:checked').attr('id') == 'job_stay_radio12' &&
                $(this).attr('value') == 'Cluster2') {
                job_stayChartData.datasets[0].data = [398, 192, 107, 70, 186, 50, 108, 486, 38, 65, 80, 65, 53, 87, 200, 6, 0, 0, 0];
                job_stayChart.options.title.text = '12차시 Cluster2 의 거주지역 분포'
                job_stayChart.update();
            }
            else if ($('input[name="job_stay_radio"]:checked').attr('id') == 'job_stay_radio12' &&
                $(this).attr('value') == 'Cluster3') {
                job_stayChartData.datasets[0].data = [205, 115, 61, 41, 78, 28, 38, 256, 46, 53, 89, 73, 103, 89, 126, 17, 0, 0, 0];
                job_stayChart.options.title.text = '12차시 Cluster3 의 거주지역 분포'
                job_stayChart.update();
            }
            else if ($('input[name="job_stay_radio"]:checked').attr('id') == 'job_stay_radio12' &&
                $(this).attr('value') == 'Cluster4') {
                job_stayChartData.datasets[0].data = [690, 345, 176, 89, 190, 94, 87, 703, 120, 127, 127, 152, 112, 182, 274, 18, 0, 0, 0];
                job_stayChart.options.title.text = '12차시 Cluster4 의 거주지역 분포'
                job_stayChart.update();
            }
            else if ($('input[name="job_stay_radio"]:checked').attr('id') == 'job_stay_radio12' &&
                $(this).attr('value') == 'Cluster5') {
                job_stayChartData.datasets[0].data = [35, 20, 11, 9, 17, 7, 6, 59, 15, 20, 30, 25, 34, 32, 34, 8, 0, 0, 0];
                job_stayChart.options.title.text = '12차시 Cluster5 의 거주지역 분포'
                job_stayChart.update();
            }
            else if ($('input[name="job_stay_radio"]:checked').attr('id') == 'job_stay_radio21' &&
                $(this).attr('value') == 'Cluster1') {
                job_stayChartData.datasets[0].data = [179, 83, 47, 31, 59, 25, 32, 243, 22, 43, 61, 50, 35, 44, 80, 5, 0, 0, 2];
                job_stayChart.options.title.text = '21차시 Cluster1 의 거주지역 분포'
                job_stayChart.update();
            }
            else if ($('input[name="job_stay_radio"]:checked').attr('id') == 'job_stay_radio21' &&
                $(this).attr('value') == 'Cluster2') {
                job_stayChartData.datasets[0].data = [359, 177, 106, 62, 181, 49, 102, 524, 44, 66, 90, 60, 56, 76, 216, 7, 0, 0, 16];
                job_stayChart.options.title.text = '21차시 Cluster2 의 거주지역 분포'
                job_stayChart.update();
            }
            else if ($('input[name="job_stay_radio"]:checked').attr('id') == 'job_stay_radio21' &&
                $(this).attr('value') == 'Cluster3') {
                job_stayChartData.datasets[0].data = [178, 112, 58, 36, 78, 27, 39, 277, 46, 52, 87, 76, 106, 94, 130, 16, 0, 0, 6];
                job_stayChart.options.title.text = '21차시 Cluster3 의 거주지역 분포'
                job_stayChart.update();
            }
            else if ($('input[name="job_stay_radio"]:checked').attr('id') == 'job_stay_radio21' &&
                $(this).attr('value') == 'Cluster4') {
                job_stayChartData.datasets[0].data = [617, 329, 176, 89, 194, 97, 86, 749, 127, 126, 127, 151, 113, 179, 290, 21, 0, 0, 15];
                job_stayChart.options.title.text = '21차시 Cluster4 의 거주지역 분포'
                job_stayChart.update();
            }
            else {
                job_stayChartData.datasets[0].data = [28, 20, 10, 7, 17, 7, 6, 61, 15, 18, 35, 28, 35, 32, 35, 8, 0, 0, 0];
                job_stayChart.options.title.text = '21차시 Cluster5 의 거주지역 분포'
                job_stayChart.update();
            }
        });

        $('input[name="multi_ratio_radio"]').change(function () {
            if ($(this).attr('id') == 'multi_ratio_radio12') {
                multi_barChartData.datasets[0].data = [0.479, 0.709, 0.62, 0.767, 0.741];
                multi_barChartData.datasets[1].data = [0.373, 0.795, 0.148, 0.876, 0.115];
                multi_barChartData.datasets[2].data = [0.262, 0.9, 0.937, 0.86, 0.072];
                multi_barChart.options.title.text = '12차시 성별, 국민연금가입, 정규직 비율 분포';
                multi_barChart.update();
            }
            else {
                multi_barChartData.datasets[0].data = [0.479, 0.709, 0.62, 0.767, 0.741];
                multi_barChartData.datasets[1].data = [0.513, 0.811, 0.099, 0.95, 0.18];
                multi_barChartData.datasets[2].data = [0.118, 0.929, 0.951, 0.899, 0.029];
                multi_barChart.options.title.text = '21차시 성별, 국민연금가입, 정규직 비율 분포';
                multi_barChart.update();
            }
        });
        $('input[name="multi_marriage_radio"]').change(function () {
            if ($(this).attr('id') == 'multi_marriage_radio12') {
                multi_marriageChartData.datasets[0].data = [30, 199, 7, 13, 14];
                multi_marriageChart.options.title.text = '12차시 Cluster1 의 혼인상태 분포'
                multi_marriageChart.update();
            } else {
                multi_marriageChartData.datasets[0].data = [19, 192, 4, 27, 21];
                multi_marriageChart.options.title.text = '21차시 Cluster1 의 혼인상태 분포'
                multi_marriageChart.update();
            }
        });
        $('input[name="multi_edu_radio"]').change(function () {
            if ($(this).attr('id') == 'multi_edu_radio12') {
                multi_barChartData_edu.datasets[0].data = [0.814, 0.395, 0.239, 0.422, 0.971];
                multi_barChartData_edu.datasets[1].data = [0.072, 0.239, 0.113, 0.205, 0.007];
                multi_barChartData_edu.datasets[2].data = [0.095, 0.302, 0.521, 0.283, 0.022];
                multi_barChartData_edu.datasets[3].data = [0.019, 0.064, 0.127, 0.09, 0];
                multi_barChart_edu.options.title.text = '12차시 최종학력 분포'
                multi_barChart_edu.update();
            } else {
                multi_barChartData_edu.datasets[0].data = [0.814, 0.39, 0.225, 0.415, 0.971];
                multi_barChartData_edu.datasets[1].data = [0.072, 0.239, 0.113, 0.198, 0.007];
                multi_barChartData_edu.datasets[2].data = [0.087, 0.297, 0.507, 0.283, 0.022];
                multi_barChartData_edu.datasets[3].data = [0.027, 0.074, 0.155, 0.104, 0];
                multi_barChart_edu.options.title.text = '21차시 최종학력 분포'
                multi_barChart_edu.update();
            }
        });
        $('.multi_otherbtn-marr').click(function () {
            if ($('input[name="multi_marriage_radio"]:checked').attr('id') == 'multi_marriage_radio12' &&
                $(this).attr('value') == 'Cluster1') {
                multi_marriageChartData.datasets[0].data = [30, 199, 7, 13, 14];
                multi_marriageChart.options.title.text = '12차시 Cluster1의 혼인상태 분포'
                multi_marriageChart.update();

            }
            else if ($('input[name="multi_marriage_radio"]:checked').attr('id') == 'multi_marriage_radio12' &&
                $(this).attr('value') == 'Cluster2') {
                multi_marriageChartData.datasets[0].data = [147, 719, 5, 23, 13];
                multi_marriageChart.options.title.text = '12차시 Cluster2 의 혼인상태 분포'
                multi_marriageChart.update();
            }
            else if ($('input[name="multi_marriage_radio"]:checked').attr('id') == 'multi_marriage_radio12' &&
                $(this).attr('value') == 'Cluster3') {
                multi_marriageChartData.datasets[0].data = [23, 113, 0, 3, 3];
                multi_marriageChart.options.title.text = '12차시 Cluster3 의 혼인상태 분포'
                multi_marriageChart.update();
            }
            else if ($('input[name="multi_marriage_radio"]:checked').attr('id') == 'multi_marriage_radio12' &&
                $(this).attr('value') == 'Cluster4') {
                multi_marriageChartData.datasets[0].data = [44, 202, 0, 7, 5];
                multi_marriageChart.options.title.text = '12차시 Cluster4 의 혼인상태 분포'
                multi_marriageChart.update();
            }
            else if ($('input[name="multi_marriage_radio"]:checked').attr('id') == 'multi_marriage_radio12' &&
                $(this).attr('value') == 'Cluster5') {
                multi_marriageChartData.datasets[0].data = [8, 106, 5, 12, 8];
                multi_marriageChart.options.title.text = '12차시 Cluster5 의 혼인상태 분포'
                multi_marriageChart.update();
            }
            else if ($('input[name="multi_marriage_radio"]:checked').attr('id') == 'multi_marriage_radio21' &&
                $(this).attr('value') == 'Cluster1') {
                multi_marriageChartData.datasets[0].data = [19, 192, 4, 27, 21];
                multi_marriageChart.options.title.text = '21차시 Cluster1 의 혼인상태 분포'
                multi_marriageChart.update();
            }
            else if ($('input[name="multi_marriage_radio"]:checked').attr('id') == 'multi_marriage_radio21' &&
                $(this).attr('value') == 'Cluster2') {
                multi_marriageChartData.datasets[0].data = [64, 780, 6, 37, 20];
                multi_marriageChart.options.title.text = '21차시 Cluster2 의 혼인상태 분포'
                multi_marriageChart.update();
            }
            else if ($('input[name="multi_marriage_radio"]:checked').attr('id') == 'multi_marriage_radio21' &&
                $(this).attr('value') == 'Cluster3') {
                multi_marriageChartData.datasets[0].data = [5, 130, 0, 5, 2];
                multi_marriageChart.options.title.text = '21차시 Cluster3 의 혼인상태 분포'
                multi_marriageChart.update();
            }
            else if ($('input[name="multi_marriage_radio"]:checked').attr('id') == 'multi_marriage_radio21' &&
                $(this).attr('value') == 'Cluster4') {
                multi_marriageChartData.datasets[0].data = [16, 223, 1, 11, 7];
                multi_marriageChart.options.title.text = '21차시 Cluster4 의 혼인상태 분포'
                multi_marriageChart.update();
            }
            else {
                multi_marriageChartData.datasets[0].data = [8, 101, 6, 11, 13];
                multi_marriageChart.options.title.text = '21차시 Cluster5 의 혼인상태 분포'
                multi_marriageChart.update();
            }
        });
        $('input[name="multi_stay_radio"]').change(function () {
            if ($(this).attr('id') == 'multi_stay_radio12') {
                multi_stayChartData.datasets[0].data = [68, 23, 4, 11, 2, 2, 8, 64, 11, 9, 3, 7, 11, 13, 27, 0, 0, 0, 0];
                multi_stayChart.options.title.text = '12차시 Cluster1 의 거주지역 분포'
                multi_stayChart.update();
            } else {
                multi_stayChartData.datasets[0].data = [62, 23, 5, 10, 0, 2, 6, 67, 13, 9, 4, 7, 11, 13, 29, 0, 0, 0, 2];
                multi_stayChart.options.title.text = '21차시 Cluster1 의 거주지역 분포'
                multi_stayChart.update();
            }
        });
        $('.multi_otherbtn-stay').click(function () {
            if ($('input[name="multi_stay_radio"]:checked').attr('id') == 'multi_stay_radio12' &&
                $(this).attr('value') == 'Cluster1') {
                multi_stayChartData.datasets[0].data = [68, 23, 4, 11, 2, 2, 8, 64, 11, 9, 3, 7, 11, 13, 27, 0, 0, 0, 0];
                multi_stayChart.options.title.text = '12차시 Cluster1의 거주지역 분포'
                multi_stayChart.update();

            }
            else if ($('input[name="multi_stay_radio"]:checked').attr('id') == 'multi_stay_radio12' &&
                $(this).attr('value') == 'Cluster2') {
                multi_stayChartData.datasets[0].data = [154, 97, 67, 28, 108, 25, 73, 25, 18, 28, 43, 41, 31, 45, 117, 7, 0, 0, 0];
                multi_stayChart.options.title.text = '12차시 Cluster2 의 거주지역 분포'
                multi_stayChart.update();
            }
            else if ($('input[name="multi_stay_radio"]:checked').attr('id') == 'multi_stay_radio12' &&
                $(this).attr('value') == 'Cluster3') {
                multi_stayChartData.datasets[0].data = [48, 0, 0, 12, 2, 11, 0, 42, 1, 14, 11, 0, 0, 1, 0, 0, 0, 0, 0];
                multi_stayChart.options.title.text = '12차시 Cluster3 의 거주지역 분포'
                multi_stayChart.update();
            }
            else if ($('input[name="multi_stay_radio"]:checked').attr('id') == 'multi_stay_radio12' &&
                $(this).attr('value') == 'Cluster4') {
                multi_stayChartData.datasets[0].data = [23, 0, 0, 1, 1, 0, 0, 225, 1, 1, 0, 1, 0, 5, 0, 0, 0, 0, 0];
                multi_stayChart.options.title.text = '12차시 Cluster4 의 거주지역 분포'
                multi_stayChart.update();
            }
            else if ($('input[name="multi_stay_radio"]:checked').attr('id') == 'multi_stay_radio12' &&
                $(this).attr('value') == 'Cluster5') {
                multi_stayChartData.datasets[0].data = [30, 21, 12, 0, 7, 1, 0, 32, 2, 7, 4, 10, 7, 5, 0, 1, 0, 0, 0];
                multi_stayChart.options.title.text = '12차시 Cluster5 의 거주지역 분포'
                multi_stayChart.update();
            }
            else if ($('input[name="multi_stay_radio"]:checked').attr('id') == 'multi_stay_radio12' &&
                $(this).attr('value') == 'Cluster1') {
                multi_stayChartData.datasets[0].data = [62, 23, 5, 10, 0, 2, 6, 67, 13, 9, 4, 7, 11, 13, 29, 0, 0, 0, 2];
                multi_stayChart.options.title.text = '21차시 Cluster1 의 거주지역 분포'
                multi_stayChart.update();
            }
            else if ($('input[name="multi_stay_radio"]:checked').attr('id') == 'multi_stay_radio12' &&
                $(this).attr('value') == 'Cluster2') {
                multi_stayChartData.datasets[0].data = [153, 95, 66, 22, 110, 25, 71, 15, 23, 27, 49, 42, 30, 42, 120, 7, 0, 0, 10];
                multi_stayChart.options.title.text = '21차시 Cluster2 의 거주지역 분포'
                multi_stayChart.update();
            }
            else if ($('input[name="multi_stay_radio"]:checked').attr('id') == 'multi_stay_radio12' &&
                $(this).attr('value') == 'Cluster3') {
                multi_stayChartData.datasets[0].data = [45, 0, 0, 12, 2, 11, 0, 40, 0, 16, 13, 0, 1, 0, 0, 0, 0, 0, 2];
                multi_stayChart.options.title.text = '21차시 Cluster3 의 거주지역 분포'
                multi_stayChart.update();
            }
            else if ($('input[name="multi_stay_radio"]:checked').attr('id') == 'multi_stay_radio12' &&
                $(this).attr('value') == 'Cluster4') {
                multi_stayChartData.datasets[0].data = [8, 0, 0, 0, 0, 0, 0, 245, 0, 1, 0, 0, 0, 2, 2, 0, 0, 0, 0];
                multi_stayChart.options.title.text = '21차시 Cluster4 의 거주지역 분포'
                multi_stayChart.update();
            }
            else {
                multi_stayChartData.datasets[0].data = [30, 20, 12, 0, 8, 1, 0, 29, 2, 7, 4, 11, 8, 5, 1, 1, 0, 0, 0];
                multi_stayChart.options.title.text = '21차시 Cluster5 의 거주지역 분포'
                multi_stayChart.update();
            }
        });

    }
    



    $('.my_startdatepicker').datepicker({
        autoSize: true,
        changeYear:true,
        changeMonth:true,
        defaultDate:'2010-7-1',
        minDate: new Date(2000,01,04),
        maxDate: new Date(2020,05,30),
        onSelect:function(dateText, inst) {
            $('#start_date').val(dateText);
        }
    });
    $('.my_enddatepicker').datepicker({
        autoSize: true,
        changeYear:true,
        changeMonth:true,
        minDate: new Date(2010,01,04),
        maxDate: new Date(2020,05,30),
        onSelect:function(dateText, inst) {
            $('#end_date').val(dateText);
            }
    });
    $('input[name=time_period]').click(function() {
        $('input[name=time_period]').prop('checked',false);
        $('input[name=time_period]').parent().removeClass('active');
        $(this).prop('checked', true);
        $(this).parent().addClass('active');
    });
    $('input[name=education]').click(function() {
        $('input[name=education]').prop('checked',false);
        $('input[name=education]').parent().removeClass('active');
        $(this).prop('checked', true);
        $(this).parent().addClass('active');
    });
    $('input[type="text"]').keydown(function() {
        if (event.keyCode === 13) {
          event.preventDefault();
        };
    });
});
function menu_active(){
    sBtn = $("#navbar > li"); 
    sBtn.removeClass("active"); 
    current_pagelink = location.pathname.replaceAll("/","")
    if(current_pagelink==''){
        current_pagelink="home";
    }
    $(`a[id=${current_pagelink}]`).addClass("active");
}
function weight_change(){
    var w_total=0;
    for(i=1;i<=10;i++){
        if($('#allocation'+i).val()==''){
            continue;   
        }
        w_total += parseInt($('#allocation'+i).val());
    }
    $('#weight_total').text('비중 합 : '+ w_total);
}
function clearText(thefield) {
    if (thefield.defaultValue==thefield.value) {
      thefield.value="100";
    }
  }
  function defaultText(thefield) {
    if (thefield.value=="") {
      thefield.value=thefield.defaultValue;
    }
  }
var chartcount = 0;
function showResult(){
    if(chartcount>=1){
        window.chart0.destroy();
        window.chart1.destroy();
        window.chart2.destroy();
        window.chart3.destroy();
        window.chart4.destroy();
        $('#graph_result').css('display','none');
    }
    chartcount++;
    var asset_dict={};
    row_count = Number($("#assets")[0].childElementCount)
    for(var i=1;i<=row_count;i++){
        asset_dict[`asset${i}`] = [$('#asset_code'+i).val(),$('#allocation'+i).val(),$('#min_weight'+i).val(),$('#max_weight'+i).val()];
    }
    data = {
        'start_date' : $('#start_date').val(),
        'end_date' : $('#end_date').val(),
        'row_count' : Number($("#assets")[0].childElementCount),
        'asset_dict' : asset_dict,
        'time_period' : $('input[type=radio]:checked').val(), 
        'csrfmiddlewaretoken':$('input[name=csrfmiddlewaretoken]').val(),
        'action': 'post'
    }
    data['asset_dict'] = JSON.stringify(data['asset_dict'])
    $.ajax({
        type:'POST',
        url:'/analysis_results/',
        data : data,
        success:function(json){
            $('#graph_result').css('display','block');
            drawReturnGraph(json.xy_graph_x, json.xy_graph_y);
            drawEfGraph(json.gmv_pfo,json.msharp_pfo,json.ef_pfo,json.individual_pfo,json.index_names);
            indReturns(json.xy_graph_x, json.index_nidx,json.index_names);
            doughnutGraph(json.index_names, json.msharp_pfo, json.gmv_pfo);
            $('#showResult').show();
            $('.result_table').show();
            console.log(data['start_date']);

        },beforeSend:function(){
            $('#loading_back').css('display','block');
            $('#wrap_loading').css('display','block');
        },complete:function(){
            $('#wrap_loading').css('display','none');
            $('#loading_back').css('display','none');
        },error : function(xhr,errmsg,err) {
            alert('중복된 자산을 입력하였거나, 투자 시작 기간과 지수의 자산시점이 맞지 않습니다.');
            console.log(xhr.status + ": " + xhr.responseText+err);
            location.reload();

        }
    });
}
function indReturns(x,y,title){
    var cnvs = document.getElementById('indReturns');
    var ctx = cnvs.getContext('2d');

    var x_date = x;
    x_date = slicing(x_date);

    window.chart0 = new Chart(ctx, {
        type: 'line',
        data : {
            labels : x_date,
            datasets : [{
                label : title[0],
                backgroundColor : '#00ff0000',
                borderColor : '#2f2e4e',
                data : y[0],
                pointRadius:0
            }]
        },
        options : {
            title : {
                display: true,
                text : '개별 자산 수익률 그래프'
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: '#333'
                }
            }
        }
    });
    if(title.length>=2){
        for(var i=1;i<title.length;i++){
            var randcolor = "#" + Math.round(Math.random()*0xFFFFFF).toString(16);
            pushline(y[i],title[i],randcolor);
        }
        window.chart0.update();
    }
}
function pushline(y,title, color){
    chart0.data.datasets.push({
        type: 'line',
        label : title,
        data : y,
        backgroundColor : '#00ff0000',
        borderColor: color,
        pointRadius: 0  
    });
    //window.chart0.update();
}
function drawReturnGraph(x,y) {
    var ctx = document.getElementById('returngraph').getContext('2d');
    var x_date = x;
    var y_return = y;

    x_date = slicing(x_date);
    y_return= slicing(y_return);
    
    window.chart1 = new Chart(ctx, {
        type: 'line',
        data : {
            labels : x_date,
            datasets : [{
                label : '수익률 그래프',
                backgroundColor : '#00ff0000',
                borderColor : 'rgb(255,99,132)',
                data : y_return,
                pointRadius: 0  
            }]
        },
        options : {
            title : {
                display: true,
                text : '포트폴리오 수익률 그래프'
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: '#333'
                }
            }
        }
    });
}
function doughnutGraph(index_names, msharp_pfo, gmv_pfo){
    var ind_name = index_names;
    var gmv_weights =gmv_pfo['gmv_weights'];
    var msharp_weights = msharp_pfo['msharp_weights'];
    ind_name = slicing(ind_name);
    gmv_weights = slicing(gmv_weights);
    msharp_weights = slicing(msharp_weights);
    colors = [];
    for(var i=0;i<ind_name.length;i++){
        colors[i] = "#" + Math.round(Math.random()*0xFFFFFF).toString(16);
    }

    var cnvs = document.getElementById('max_doughnut');
    var ctx = cnvs.getContext('2d');

    window.chart3 = new Chart(ctx, {
        type: 'doughnut',
        data : {
            labels : index_names,
            datasets : [{
                label : 'MAX Sharp Portfolio',
                backgroundColor : colors,
                data : msharp_weights,
            }]
        },
        options: {
            legendCallback: function(chart) { 
                var text = []; 
                text.push('<ul class="' + chart.id + '-legend">'); 
                for (var i = 0; i < chart.data.datasets.length; i++) { 
                    text.push('<li><span style="background-color:' + 
                               chart.data.datasets[i].backgroundColor + 
                               '"></span>'); 
                    if (chart.data.datasets[i].label) { 
                        text.push(chart.data.datasets[i].label); 
                    } 
                    text.push('</li>'); 
                } 
                text.push('</ul>'); 
                return text.join(''); 
            },
            maintainAspectRatio : false,
            title : {
                display: true,
                text : '자산 배분 비중'
            },
            animation: {
                animateRotate : true,
            }
        },
    });
    for(var i=0;i<ind_name.length;i++){
        colors[i] = "#" + Math.round(Math.random()*0xFFFFFF).toString(16);
    }
    var cnvs2 = document.getElementById('gmv_doughnut');
    var ctx2 = cnvs2.getContext('2d');

    window.chart4 = new Chart(ctx2, {
        type: 'doughnut',
        data : {
            labels : index_names,
            datasets : [{
                label : 'GMV Portfolio',
                backgroundColor : colors,
                data : gmv_weights,
            }]
        },
        options: {
            legendCallback: function(chart) { 
                var text = []; 
                text.push('<ul class="' + chart.id + '-legend">'); 
                for (var i = 0; i < chart.data.datasets.length; i++) { 
                    text.push('<li><span style="background-color:' + 
                               chart.data.datasets[i].backgroundColor + 
                               '"></span>'); 
                    if (chart.data.datasets[i].label) { 
                        text.push(chart.data.datasets[i].label); 
                    } 
                    text.push('</li>'); 
                } 
                text.push('</ul>'); 
                return text.join(''); 
            },
            maintainAspectRatio : false,
            animation: {
                animateRotate : true,
            }
        },
    });

}
function drawEfGraph(gmv_pfo,msharp_pfo,ef_pfo,individual_pfo,index_names) {
    var gmv_vol= gmv_pfo['gmv_volatility'];
    var gmv_ret = gmv_pfo['gmv_return'];
    
    var msharp_ret= msharp_pfo['msharp_return'];
    var msharp_vol = msharp_pfo['msharp_volatility'];
    
    var ef_pfo_vols = ef_pfo['ef_volatilities'];
    var ef_pfo_rets = ef_pfo['ef_returns'];

    var ind_rets = individual_pfo['rets'];
    var ind_vols = individual_pfo['stds'];
    var ind_names= index_names;
    var ind_weight = ef_pfo['ef_weights'];
    
    $('#msharp_ret').html(msharp_ret);
    $('#msharp_vol').html(msharp_vol);
    $('#gmv_ret').html(gmv_ret);
    $('#gmv_vol').html(gmv_vol);


    ef_pfo_rets = slicing(ef_pfo_rets);
    ef_pfo_vols = slicing(ef_pfo_vols);
    ind_rets = slicing(ind_rets);
    ind_vols = slicing(ind_vols);


    ind_names = slicing(ind_names);
    //doughnutGraph(ind_names,ind_weight);

    var ctx = document.getElementById('efficient_frontier_graph').getContext('2d');

    var ef_storage= [];
    
    for (var i=0;i<ef_pfo_vols.length;i++){
        x = Number(ef_pfo_vols[i]);
        y = Number(ef_pfo_rets[i]);
        var json = {x: x, y:y};
        ef_storage.push(json);
    }
    window.chart2 = new Chart(ctx, {
        type: 'scatter',
        data : {
            labels : ef_pfo_vols,
            datasets : [{
                type : 'line',
                label : '효율적 투자선',
                backgroundColor : '#385a7c',
                borderColor : '#f6f4f1',
                data : ef_storage,
                showLine : true,
                fill : false,
                order : 1,
            }]
        },
        options : {
            title : {
                display: true,
                text : '효율적 투자선',
            },
            maintainAspectRatio : false,
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: '#333',
                }
            },
            scales : {
                yAxes : [{
                    ticks : {
                        callback : function (value) {
                            return (value/100).toLocaleString('de-DE', {style:'percent'});
                        }
                    },
                    scaleLabel :{
                        display : true,
                        labelString : 'annual return',
                        fontStyle : 'bold',
                        fontSize : '15',
                    }
                }],
                xAxes : [{
                    ticks : {
                        callback : function (value) {
                            return (value/100).toLocaleString('de-DE', {style:'percent'});
                        }
                    },
                    scaleLabel :{
                        display : true,
                        labelString : 'annual volatility',
                        fontStyle : 'bold',
                        fontSize : '15',

                    }
                }]
            },
            tooltips : {
                mode : 'single',
                displayColors : false,
                backgroundColor : '#282721',
                titleFontColor : '#fff',
                titleAlign : 'center',
                bodySpacing : 2,
                bodyFontColor :'#fff',
                bodyAlign : 'center',
                callbacks : {
                    title : function(tooltipitem, data){
                        return data.datasets[tooltipitem[0]['datasetIndex']].label;
                    },
                    label : function(tooltipitem, data){
                        var label = "annual_volatility : " + tooltipitem['xLabel'];
                        label += "  annual_return : " + tooltipitem['yLabel'];
                        return label;
                    },
                    afterLabel : function(tooltipitem,data){
                        var footer = ' ';
                        if(tooltipitem['datasetIndex']==0){
                            for(var i =0; i<ind_names.length; i++){
                                footer+= ind_names[i]+" : "+ind_weight[tooltipitem['index']][i]+"%\n";
                            }
                        }
                        return footer;
                    }
                    }
                }
        },
    });
    pushscatter(msharp_vol, msharp_ret, "Maximum Sharpe Portfolio",'#bada55',3);
    pushscatter(gmv_vol,gmv_ret, "Minimum Volatility Portfolio",'#f7347a',3);
    for(var i=0;i<ind_rets.length;i++){
        var randcolor = "#" + Math.round(Math.random()*0xFFFFFF).toString(16);
        pushscatter(ind_vols[i],ind_rets[i],ind_names[i],randcolor,2);
    }
    window.chart2.update();
}
function pushscatter(x,y,label,color,order){
    chart2.data.datasets.push({
        type: 'scatter',
        label : label,
        showLine : false,
        data : [{ x: x, y:y}],
        backgroundColor : color,
        pointBackgroundColor : color,
        pointRadius: 8,
        pointHoverRadius: 8,
        order : order,
    });
    window.chart2.update();
}
function slicing(variable) {
    var variable = variable+'';
    variable = variable.split(",");
    variable[0] = variable[0].replace("[","");
    variable[variable.length-1] = variable[variable.length-1].replace("]","");
    return variable;
}
function weights_row(index_names,msharp_pfo,gmv_pfo) {
    var gtbody = document.getElementById('gmv_tbody');
    var mtbody = document.getElementById('max_tbody');
    var ind_name = index_names;
    var gmv_weights =gmv_pfo['gmv_weights'];
    var msharp_weights = msharp_pfo['msharp_weights'];
    ind_name = slicing(ind_name);
    gmv_weights = slicing(gmv_weights);
    msharp_weights = slicing(msharp_weights);
    
    for(var i=0;i<ind_name.length;i++){
        var grow = gtbody.insertRow(gtbody.rows.length);
        var mrow = mtbody.insertRow(mtbody.rows.length);
        
        var cell1 = grow.insertCell(0);
        var cell2 = grow.insertCell(1);
        cell1.innerHTML = ind_name[i];
        cell2.innerHTML = gmv_weights[i]+"%";

        var cell3 = mrow.insertCell(0);
        var cell4 = mrow.insertCell(1);
        cell3.innerHTML = ind_name[i];
        cell4.innerHTML = msharp_weights[i]+"%";
    }
}

function add_asset_row(){
    $($("#assets")[0].children[0]).clone().appendTo($("#assets"));
    var childArrayNum = Number($("#assets")[0].childElementCount);
    $('#row_count').val(childArrayNum);
    $($("#assets")[0].children[childArrayNum-1]).attr('id','row_asset'+childArrayNum);
    $($(`#row_asset${childArrayNum}`).children('div')).children(`#asset_code1`).attr({'id':'asset_code'+childArrayNum, 'name': 'asset_code'+childArrayNum});
    
    $(`#row_asset${childArrayNum}`).children('div').children(`#allocation1`).attr({'id':'allocation'+childArrayNum, 'name':'allocation'+childArrayNum});
    
    $(`#row_asset${childArrayNum}`).children('div').children(`#min_weight1`).attr({'id':'min_weight'+childArrayNum,'name':'min_weight'+childArrayNum});

    $(`#row_asset${childArrayNum}`).children('div').children(`#max_weight1`).attr({'id':'max_weight'+childArrayNum, 'name':'max_weight'+childArrayNum});
}
function delete_rows(){
    var childArrayNum = Number($("#assets")[0].childElementCount);
    for(var i = 2; i<=childArrayNum;i++){
        $(`#row_asset${i}`).remove();
    }
}
var clickcount=0;
function TDF_result(){
    
    if(clickcount>=1){
        window.canvas.destroy();
        window.lc_chart.destroy();
        $('#graph_result').css('display','none');
    }
    clickcount++;
    data = {
        'education' : $('input[type=radio]:checked').val(), 
        'csrfmiddlewaretoken':$('input[name=csrfmiddlewaretoken]').val(),
        'user_age' : $('#user_age').val(),
        'retirement' : $('#retirement').val(),
        'initial_wealth' : $('#initial_wealth').val(),
        'action': 'post',
    }
    $.ajax({
        type:'POST',
        url:'/TDF_Result/',
        data : data,
        success:function(json){
            $('#graph_result').css('display','block');
            lc_weight_graph(json.risky_asset, json.risk_free);
            lc_data_graph(json.financial_wealth, json.labor_income);
        },beforeSend:function(){
            $('#loading_back').css('display','block');
            $('#wrap_loading').css('display','block');
        },complete:function(){
            $('#wrap_loading').css('display','none');
            $('#loading_back').css('display','none');
        },error : function(xhr,errmsg,err) {
            console.log(xhr.status + ": " + xhr.responseText+err);
        }
    });
}
function sleep (delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
 }
 
function lc_data_graph(financial_wealth_y,labor_income_y){
    financial_wealth_y[0] = Number(financial_wealth_y[0]);
    
    var ctx =  document.getElementById('myCanvas2').getContext('2d');
    window.canvas = new Chart(ctx, {
            type: 'line',
            data: {
            labels: ['26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'],
            datasets: [{
                label: 'labor income',
                yAxisID: 'labor_income',
                data: labor_income_y,
                backgroundColor : '#d9534f',
                fill : false,
            }, {
                label: 'Financial wealth',
                yAxisID: 'Financial_wealth',
                data: financial_wealth_y,
                backgroundColor : '#428bca',
                fill: false,
            }]
            },
            options: {
                maintainAspectRatio: false,
                title : {
                    display: true,
                    text : '재무-임금 예상 그래프'
                },
                scales: {
                    yAxes: [{
                        id: 'labor_income',
                        type: 'linear',
                        position: 'left',
                    }, {
                        id: 'Financial_wealth',
                        type: 'linear',
                        position: 'right',
                        ticks: {
                            max: 10000000,
                            min: 0
                        }
                    }]
                }
            }
        });
        window.canvas.update();

}
function lc_weight_graph(Y_risky, Y_risk_free){
    var Y_risky = Y_risky;
    var Y_risk_free = Y_risk_free;
    Y_risky = slicing(Y_risky);
    var n_array = [];
    for (var i=0;i<35;i++){
        n_array.push(100)
    }
    Y_risk_free = slicing(Y_risk_free);
    var ctx = document.getElementById('myCanvas').getContext('2d');
    window.lc_chart = new Chart(ctx, {
        
        data : {
            labels : ['26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'],
            
            datasets : [{
                type : 'line',
                label : '위험자산 비중',
                backgroundColor : '#428bca',
                borderColor : '#f9f9f9',
                data : Y_risky,
                fillOpcaity: .3,
            },{
                label : '안전자산 비중',
                type: 'line',
                backgroundColor : '#d9534f',
                data : n_array,
                pointRadius:0,
                
            }],
        },options : {
            maintainAspectRatio: false, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
            title : {
                display: true,
                text : '위험자산-안전자산 배분비중 그래프'
            },
            scales: {
                yAxes: [{
                    ticks: {
                    }
                }],
                xAxes: [{
                    ticks : {
                        stepSize : 10
                    }
                }]
            },
            tooltips : {
                mode : 'single',
                displayColors : false,
                backgroundColor : '#282721',
                titleFontColor : '#fff',
                titleAlign : 'center',
                bodySpacing : 2,
                bodyFontColor :'#fff',
                bodyAlign : 'center',
                callbacks : {
                    title : function(tooltipitem, data){
                        return "배분 비율";
                    },
                    label : function(tooltipitem, data){
                        var label = "위험 자산 : "  + tooltipitem['yLabel'];
                        label += "  안전 자산 : " + (100-tooltipitem['yLabel']);
                        return label;
                    },
                }
        },
        }
    });
    window.lc_chart.update();
}

//
//cluster_analysis 0번째
//
let n_sizeChartData = {
    labels: ['cluster1', 'cluster2', 'cluster3', 'cluster4'],
    datasets: [{
        data: [336, 2084, 1120, 1484],
        backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)']
    }]
    // 'rgb(153, 102, 255)' 
};
let n_sizeChartDraw = function () {

    let n_sizectx = document.getElementById('n_sizeChart').getContext('2d');

    window.n_pieChart = new Chart(n_sizectx, {

        type: 'pie',
        data: n_sizeChartData,
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            },
            cutoutPercentage: 31,
            responsive: false,
            title: {
                display: true,
                text: '클러스터 규모',

            },
            legend: {
                display: false,
            }
        }
    });
};
let n_barChartData = {
    labels: ["Cluster1", "Cluster2", "Cluster3", "Cluster4"],
    datasets: [
        {
            label: "성별(남성) 비율",
            backgroundColor: "lightblue",
            borderColor: "lightblue",
            borderWidth: 1,
            data: [0.38, 0.7, 0.76, 0.1, 0.73]
        },
        {
            label: "국민연금가입 비율",
            backgroundColor: "pink",
            borderColor: "pink",
            borderWidth: 1,
            data: [0.303, 0.715, 0.598, 0.333, 0.177]
        },
        {
            label: "정규직 비율",
            backgroundColor: "lightgreen",
            borderColor: "lightgreen",
            borderWidth: 1,
            data: [0.242, 0.851, 0.684, 0.333, 0.177]
        },

    ]
};
let n_barChartDraw = function () {
    var n_barctx = document.getElementById('n_barChart').getContext('2d');
    window.n_barChart = new Chart(n_barctx, {

        type: 'bar',
        data: n_barChartData,
        options: {
            layout: {
                padding: {
                    bottom: 20,
                }
            },
            title: {
                display: true,
                text: '21차시 성별, 국민연금가입, 정규직 비율 분포'
            },
        },
        responsive: false,


        legend: {
            display: true,
        }
    });
};
let n_marriageChartData = {
    labels: ['미혼', '기혼', '별거', '이혼', '사별'],
    datasets: [{
        data: [0,0,1,195,140],
        backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)']
    }]
    // 'rgb(153, 102, 255)' 
};
let n_marriageChartDraw = function () {

    var n_marriagectx = document.getElementById('n_marriageChart').getContext('2d');

    window.n_marriageChart = new Chart(n_marriagectx, {

        type: 'pie',
        data: n_marriageChartData,
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            },
            cutoutPercentage: 31,
            responsive: false,
            title: {
                display: true,
                text: '21차시 Cluster1의 혼인상태 분포',

            },
            legend: {
                display: false,
            }
        }
    });
};
let n_barChartData_edu = {
    labels: [
        "Cluster1", "Cluster2", "Cluster3", "Cluster4"],
    datasets: [
        {
            label: "중졸 이하",
            backgroundColor: "lightblue",
            borderColor: "lightblue",
            borderWidth: 1,
            data: [0.44, 0.007, 0.435, 0.269]
        },
        {
            label: "고졸",
            backgroundColor: "pink",
            borderColor: "pink",
            borderWidth: 1,
            data: [0.393, 0.258, 0.398, 0.418]
        },
        {
            label: "전문대졸",
            backgroundColor: "lightgreen",
            borderColor: "lightgreen",
            borderWidth: 1,
            data: [0.045, 0.234, 0.029, 0.11]
        },
        {
            label: "대졸",
            backgroundColor: "lightyellow",
            borderColor: "lightyellow",
            borderWidth: 1,
            data: [0.116, 0.401, 0.122, 0.178]
        },
        {
            label: "석사",
            backgroundColor: "grey",
            borderColor: "grey",
            borderWidth: 1,
            data: [0.003, 0.08, 0.013, 0.02]
        },
        {
            label: "박사",
            backgroundColor: "Red",
            borderColor: "Red",
            borderWidth: 1,
            data: [0.003, 0.021, 0.003, 0.005]
        },

    ]
};
let n_barChartDraw_edu = function () {
    var n_barctx_edu = document.getElementById('n_barChart_edu').getContext('2d');
    window.n_barChart_edu = new Chart(n_barctx_edu, {

        type: 'bar',
        data: n_barChartData_edu,
        responsive: false,
        options: {
            title: {
                display: true,
                text: '21차시  최종학력 분포'
            }
        },
        legend: {
            display: true,
        }
    });
};

//
//cluster_analysis 1번째
//
let jongsa_sizeChartData = {
    labels: ['cluster1', 'cluster2', 'cluster3', 'cluster4', 'cluster5'],
    datasets: [{
        data: [206, 1605, 1042, 231, 183],
        backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)']
    }]
    // 'rgb(153, 102, 255)' 
};
let jongsa_sizeChartDraw = function () {

    let jongsa_sizectx = document.getElementById('jongsa_sizeChart').getContext('2d');

    window.jongsa_pieChart = new Chart(jongsa_sizectx, {

        type: 'pie',
        data: jongsa_sizeChartData,
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            },
            cutoutPercentage : 31,
            responsive: false,
            title: {
                display: true,
                text: '클러스터 규모',

            },
            legend: {
                display: false,
            }
        }
    });
};
let jongsa_barChartData = {
    labels: [
        "Cluster1", "Cluster2", "Cluster3", "Cluster4", "Cluster5",
    ],
    datasets: [
        {
            label: "성별(남성) 비율",
            backgroundColor: "lightblue",
            borderColor: "lightblue",
            borderWidth: 1,
            data: [0.38, 0.7, 0.76, 0.1, 0.73]
        },
        {
            label: "국민연금가입 비율",
            backgroundColor: "pink",
            borderColor: "pink",
            borderWidth: 1,
            data: [0.303,0.715,0.598,0.333,0.177]
        },
        {
            label: "정규직 비율",
            backgroundColor: "lightgreen",
            borderColor: "lightgreen",
            borderWidth: 1,
            data: [0.242,0.851,0.684,0.333,0.177]
        },
        
    ]
};
let jongsa_barChartDraw = function () {
    var jongsa_barctx = document.getElementById('jongsa_barChart').getContext('2d');
    window.jongsa_barChart = new Chart(jongsa_barctx, {

        type: 'bar',
        data: jongsa_barChartData,
        options: {
            layout: {
                padding: {
                    bottom: 20,
                }
            },
            title: {
                display: true,
                text: '12차시 성별, 국민연금가입, 정규직 비율 분포'
            },
        },
        responsive: false,
        
        
        legend: {
            display: true,
        }
    });
};
let jongsa_marriageChartData = {
    labels: ['미혼', '기혼', '별거', '이혼', '사별'],
    datasets: [{
        data: [25, 139, 6, 16, 20],
        backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)']
    }]
    // 'rgb(153, 102, 255)' 
};
let jongsa_marriageChartDraw = function () {

    var jongsa_marriagectx = document.getElementById('jongsa_marriageChart').getContext('2d');

    window.jongsa_marriageChart = new Chart(jongsa_marriagectx, {

        type: 'pie',
        data: jongsa_marriageChartData,
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            },
            cutoutPercentage: 31,
            responsive: false,
            title: {
                display: true,
                text: '12차시 Cluster1의 혼인상태 분포',

            },
            legend: {
                display: false,
            }
        }
    });
};
let jongsa_barChartData_edu = {
    labels: [
        "Cluster1", "Cluster2", "Cluster3", "Cluster4", "Cluster5",
    ],
    datasets: [
        {
            label: "대학 이하",
            backgroundColor: "lightblue",
            borderColor: "lightblue",
            borderWidth: 1,
            data: [0.75, 0.42, 0.74, 0.94, 0.96]
        },
        {
            label: "2년제 대학",
            backgroundColor: "pink",
            borderColor: "pink",
            borderWidth: 1,
            data: [0.09, 0.21, 0.09, 0.03, 0.03]
        },
        {
            label: "4년제 대학",
            backgroundColor: "lightgreen",
            borderColor: "lightgreen",
            borderWidth: 1,
            data: [0.14, 0.3, 0.15, 0.021, 0.03]
        },
        {
            label: "석/박사",
            backgroundColor: "lightyellow",
            borderColor: "lightyellow",
            borderWidth: 1,
            data: [0.025, 0.06, 0.05, 0.009, 0]
        },

    ]
};
let jongsa_barChartDraw_edu = function () {
    var jongsa_barctx_edu = document.getElementById('jongsa_barChart_edu').getContext('2d');
    window.jongsa_barChart_edu = new Chart(jongsa_barctx_edu, {

        type: 'bar',
        data: jongsa_barChartData_edu,
        responsive: false,
        options: {
            title: {
                display: true,
                text: '12차시  최종학력 분포'
            }
        },
        legend: {
            display: true,
        }
    });
};
let jongsa_stayChartData = {
    labels: ['서울특별시', '부산광역시', '대구광역시', '대전광역시', '인천광역시', '광주광역시','울산광역시','경기','강원','충북','충남','전북','전남','경북','경남','제주','이북','외국','세종'],
    datasets: [{
        data: [46,10,11,10,7,7,6,49,5,8,7,14,8,11,7,0,0,0,0],
        backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', '#FFD880', '#6B011F', '#290149',
            '#DDDDDD', '#025955', '#00917C', '#FDE8CD', '#763857', '#BFB051', '#EFF086', '#413C69', '#709FB0', '#A7C5EB', '#C5D7BD']
    }]
    // 'rgb(153, 102, 255)' 
};
let jongsa_stayChartDraw = function () {

    var jongsa_stayctx = document.getElementById('jongsa_stayChart').getContext('2d');

    window.jongsa_stayChart = new Chart(jongsa_stayctx, {

        type: 'pie',
        data: jongsa_stayChartData,
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            },
            cutoutPercentage: 31,
            responsive: false,
            title: {
                display: true,
                text: '12차시 Cluster1의 거주지역 분포',

            },
            legend: {
                display: false,
            }
        }
    });
};

//
//cluster_analysis 2번째
//
let job_sizeChartData = {
    labels: ['cluster1', 'cluster2', 'cluster3', 'cluster4', 'cluster5'],
    datasets: [{
        data: [1041, 2191, 1418, 3486, 362],
        backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)']
    }]
    // 'rgb(153, 102, 255)' 
};
let job_sizeChartDraw = function () {

    let job_sizectx = document.getElementById('job_sizeChart').getContext('2d');

    window.job_pieChart = new Chart(job_sizectx, {

        type: 'pie',
        data: job_sizeChartData,
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            },
            cutoutPercentage: 31,
            responsive: false,
            title: {
                display: true,
                text: '클러스터 규모',

            },
            legend: {
                display: false,
            }
        }
    });
};
let job_barChartData = {
    labels: [
        "Cluster1", "Cluster2", "Cluster3", "Cluster4", "Cluster5",
    ],
    datasets: [
        {
            label: "성별(남성) 비율",
            backgroundColor: "lightblue",
            borderColor: "lightblue",
            borderWidth: 1,
            data: [0.54, 0.65, 0.69, 0.22, 0.11]
        },
        {
            label: "국민연금가입 비율",
            backgroundColor: "pink",
            borderColor: "pink",
            borderWidth: 1,
            data: [0.408, 0.728, 0.382, 0.401, 0.523]
        },
        {
            label: "정규직 비율",
            backgroundColor: "lightgreen",
            borderColor: "lightgreen",
            borderWidth: 1,
            data: [0.408, 0.902, 0.382, 0.391, 0.523]
        },

    ]
};
let job_barChartDraw = function () {
    var job_barctx = document.getElementById('job_barChart').getContext('2d');
    window.job_barChart = new Chart(job_barctx, {

        type: 'bar',
        data: job_barChartData,
        options: {
            layout: {
                padding: {
                    bottom: 20,
                }
            },
            title: {
                display: true,
                text: '12차시 성별, 국민연금가입, 정규직 비율 분포'
            }
        },
        responsive: false,

        legend: {
            display: true,
        }
    });
};
let job_marriageChartData = {
    labels: ['미혼', '기혼', '별거', '이혼', '사별'],
    datasets: [{
        data: [130,769,23,68,51],
        backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)']
    }]
    // 'rgb(153, 102, 255)' 
};
let job_marriageChartDraw = function () {

    var job_marriagectx = document.getElementById('job_marriageChart').getContext('2d');

    window.job_marriageChart = new Chart(job_marriagectx, {

        type: 'pie',
        data: job_marriageChartData,
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            },
            cutoutPercentage: 31,
            responsive: false,
            title: {
                display: true,
                text: '12차시 Cluster1의 혼인상태 분포',

            },
            legend: {
                display: false,
            }
        }
    });
};
let job_barChartData_edu = {
    labels: [
        "Cluster1", "Cluster2", "Cluster3", "Cluster4", "Cluster5",
    ],
    datasets: [
        {
            label: "대학 이하",
            backgroundColor: "lightblue",
            borderColor: "lightblue",
            borderWidth: 1,
            data: [0.8,0.41,0.76,0.8,0.88]
        },
        {
            label: "2년제 대학",
            backgroundColor: "pink",
            borderColor: "pink",
            borderWidth: 1,
            data: [0.09,0.21,0.08,0.08,0.06]
        },
        {
            label: "4년제 대학",
            backgroundColor: "lightgreen",
            borderColor: "lightgreen",
            borderWidth: 1,
            data: [0.09,0.23,0.15,0.12,0.06]
        },
        {
            label: "석/박사",
            backgroundColor: "lightyellow",
            borderColor: "lightyellow",
            borderWidth: 1,
            data: [0.011,0.059,0.012,0.011,0.006]
        },

    ]
};
let job_barChartDraw_edu = function () {
    var job_barctx_edu = document.getElementById('job_barChart_edu').getContext('2d');
    window.job_barChart_edu = new Chart(job_barctx_edu, {

        type: 'bar',
        data: job_barChartData_edu,
        responsive: false,
        options: {
            title: {
                display: true,
                text: '12차시 최종학력 분포'
            }
        },
        legend: {
            display: true,
        }
    });
};
let job_stayChartData = {
    labels: ['서울특별시', '부산광역시', '대구광역시', '대전광역시', '인천광역시', '광주광역시', '울산광역시', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주', '이북', '외국', '세종'],
    datasets: [{
        data: [191,83,49,32,59,23,33,238,21,45,59,46,33,46,78,5,0,0,0],
        backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', '#FFD880', '#6B011F', '#290149',
            '#DDDDDD', '#025955', '#00917C', '#FDE8CD', '#763857', '#BFB051', '#EFF086', '#413C69', '#709FB0', '#A7C5EB', '#C5D7BD']
    }]
};
let job_stayChartDraw = function () {

    var job_stayctx = document.getElementById('job_stayChart').getContext('2d');

    window.job_stayChart = new Chart(job_stayctx, {

        type: 'pie',
        data: job_stayChartData,
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            },
            cutoutPercentage: 31,
            responsive: false,
            title: {
                display: true,
                text: '12차시 Cluster1의 거주지역 분포',

            },
            legend: {
                display: false,
            }
        }
    });
};

//
//cluster_analysis 3번째
//
let multi_sizeChartData = {
    labels: ['cluster1', 'cluster2', 'cluster3', 'cluster4', 'cluster5'],
    datasets: [{
        data: [263,907,142,258,139],
        backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)']
    }]
    // 'rgb(153, 102, 255)' 
};
let multi_sizeChartDraw = function () {

    let multi_sizectx = document.getElementById('multi_sizeChart').getContext('2d');

    window.multi_pieChart = new Chart(multi_sizectx, {

        type: 'pie',
        data: multi_sizeChartData,
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            },
            cutoutPercentage: 31,
            responsive: false,
            title: {
                display: true,
                text: '클러스터 규모',

            },
            legend: {
                display: false,
            }
        }
    });
};
let multi_barChartData = {
    labels: [
        "Cluster1", "Cluster2", "Cluster3", "Cluster4", "Cluster5",
    ],
    datasets: [
        {
            label: "성별(남성) 비율",
            backgroundColor: "lightblue",
            borderColor: "lightblue",
            borderWidth: 1,
            data: [0.479,0.709,0.62,0.767,0.741]
        },
        {
            label: "국민연금가입 비율",
            backgroundColor: "pink",
            borderColor: "pink",
            borderWidth: 1,
            data: [0.373,0.795,0.148,0.876,0.115]
        },
        {
            label: "정규직 비율",
            backgroundColor: "lightgreen",
            borderColor: "lightgreen",
            borderWidth: 1,
            data: [0.262,0.9,0.937,0.86,0.072]
        },

    ]
};
let multi_barChartDraw = function () {
    var multi_barctx = document.getElementById('multi_barChart').getContext('2d');
    window.multi_barChart = new Chart(multi_barctx, {

        type: 'bar',
        data: multi_barChartData,
        options: {
            layout: {
                padding: {
                    bottom: 20,
                },
            },
            title: {
                display: true,
                text: '12차시 성별, 국민연금가입, 정규직 비율 분포'
            }
        },
        responsive: false,

        legend: {
            display: true,
        }
    });
};
let multi_marriageChartData = {
    labels: ['미혼', '기혼', '별거', '이혼', '사별'],
    datasets: [{
        data: [30,199,7,13,14],
        backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)']
    }]
    // 'rgb(153, 102, 255)' 
};
let multi_marriageChartDraw = function () {

    var multi_marriagectx = document.getElementById('multi_marriageChart').getContext('2d');

    window.multi_marriageChart = new Chart(multi_marriagectx, {

        type: 'pie',
        data: multi_marriageChartData,
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            },
            cutoutPercentage: 31,
            responsive: false,
            title: {
                display: true,
                text: '12차시 Cluster1의 혼인상태 분포',

            },
            legend: {
                display: false,
            }
        }
    });
};
let multi_barChartData_edu = {
    labels: [
        "Cluster1", "Cluster2", "Cluster3", "Cluster4", "Cluster5",
    ],
    datasets: [
        {
            label: "대학 이하",
            backgroundColor: "lightblue",
            borderColor: "lightblue",
            borderWidth: 1,
            data: [0.814,0.395,0.239,0.422,0.971]
        },
        {
            label: "2년제 대학",
            backgroundColor: "pink",
            borderColor: "pink",
            borderWidth: 1,
            data: [0.072,0.239,0.113,0.205,0.007]
        },
        {
            label: "4년제 대학",
            backgroundColor: "lightgreen",
            borderColor: "lightgreen",
            borderWidth: 1,
            data: [0.095,0.302,0.521,0.283,0.022]
        },
        {
            label: "석/박사",
            backgroundColor: "lightyellow",
            borderColor: "lightyellow",
            borderWidth: 1,
            data: [0.019,0.064,0.127,0.09,0]
        },

    ]
};
let multi_barChartDraw_edu = function () {
    var multi_barctx_edu = document.getElementById('multi_barChart_edu').getContext('2d');
    window.multi_barChart_edu = new Chart(multi_barctx_edu, {

        type: 'bar',
        data: multi_barChartData_edu,
        responsive: false,
        options: {
            title: {
                display: true,
                text: '12차시 최종학력 분포'
            }
        },

        legend: {
            display: true,
        }
    });
};
let multi_stayChartData = {
    labels: ['서울특별시', '부산광역시', '대구광역시', '대전광역시', '인천광역시', '광주광역시', '울산광역시', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주', '이북', '외국', '세종'],
    datasets: [{
        data: [68,23,4,11,2,2,8,64,11,9,3,7,11,13,27,0,0,0,0],
        backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', '#FFD880', '#6B011F', '#290149',
            '#DDDDDD', '#025955', '#00917C', '#FDE8CD', '#763857', '#BFB051', '#EFF086', '#413C69', '#709FB0', '#A7C5EB', '#C5D7BD']
    }]
};
let multi_stayChartDraw = function () {

    var multi_stayctx = document.getElementById('multi_stayChart').getContext('2d');

    window.multi_stayChart = new Chart(multi_stayctx, {

        type: 'pie',
        data: multi_stayChartData,
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                }
            },
            cutoutPercentage: 31,
            responsive: false,
            title: {
                display: true,
                text: '12차시 Cluster1의 거주지역 분포',

            },
            legend: {
                display: false,
            }
        }
    });
};