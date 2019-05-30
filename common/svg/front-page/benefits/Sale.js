import React from 'react'

export const Sale = props => (
	<svg width="125" height="161" viewBox="0 0 125 161" {...props}>
		<defs>
			<path
				id="benefits-sale-b"
				d="M106.803098,136.763389 C87.9343419,155.745537 38.0203224,155.745537 19.1515668,136.763389 C0.282811081,117.781242 0.282811081,68.0074429 19.1515668,49.1460469 C38.0203224,30.284651 87.9343419,30.284651 106.803098,49.1460469 C125.671853,68.0074429 125.792652,117.901993 106.803098,136.763389 Z"
			/>
			<filter
				id="benefits-sale-a"
				width="112.1%"
				height="112.9%"
				x="-5.6%"
				y="-6.5%"
				filterUnits="objectBoundingBox">
				<feMorphology
					in="SourceAlpha"
					operator="dilate"
					radius="1"
					result="shadowSpreadOuter1"
				/>
				<feOffset
					dx="-1"
					dy="-2"
					in="shadowSpreadOuter1"
					result="shadowOffsetOuter1"
				/>
				<feColorMatrix
					in="shadowOffsetOuter1"
					result="shadowMatrixOuter1"
					values="0 0 0 0 1   0 0 0 0 0.906666667   0 0 0 0 0.6  0 0 0 1 0"
				/>
				<feMorphology
					in="SourceAlpha"
					operator="dilate"
					radius="1.5"
					result="shadowSpreadOuter2"
				/>
				<feOffset dx="2" dy="2" in="shadowSpreadOuter2" result="shadowOffsetOuter2" />
				<feColorMatrix
					in="shadowOffsetOuter2"
					result="shadowMatrixOuter2"
					values="0 0 0 0 1   0 0 0 0 0.906666667   0 0 0 0 0.6  0 0 0 1 0"
				/>
				<feMerge>
					<feMergeNode in="shadowMatrixOuter1" />
					<feMergeNode in="shadowMatrixOuter2" />
				</feMerge>
			</filter>
		</defs>
		<g fill="none" fillRule="evenodd" transform="translate(-1.5 -4)">
			<use fill="#000" filter="url(#benefits-sale-a)" xlinkHref="#benefits-sale-b" />
			<use fill="#FDC201" xlinkHref="#benefits-sale-b" />
			<g transform="translate(28.523 4.645)">
				<path
					fill="#4C4C4C"
					d="M48.9386579,57.1953106 L47.2627089,59.3588945 L46.789277,58.4641082 L46.6377788,58.3552189 C47.4580512,57.6396678 48.1849628,56.8236816 48.8013626,55.9265131 L48.8818461,55.8034208 L48.8013626,55.9265131 C48.6497944,56.3480812 48.7004191,56.8159232 48.9386579,57.1953106 Z"
				/>
				<path
					fill="#191919"
					d="M75.5123918,153.865375 L75.5123918,155.110501 C73.4607684,156.132904 71.2945039,156.90691 69.0595146,157.416114 C65.9822071,158.012639 63.4966895,157.775923 60.9496258,158.126262 C58.402562,158.476602 57.8723183,159.073126 55.9785906,159.073126 C54.0848629,159.073126 53.2610914,158.66124 53.2610914,158.66124 L53.1379991,156.530797 C53.1379991,156.530797 58.4641082,155.228859 60.1258542,153.571847 C61.3757145,152.321987 62.9664458,150.570289 63.6623907,149.784392 L70.2430944,153.098415 L73.9690037,152.804888 L75.5123918,153.865375 Z"
				/>
				<path
					fill="#E5E5E5"
					d="M49.8239756,146.11056 L51.0691016,149.363037 L51.0691016,149.774923 C51.0691016,149.774923 50.5341235,150.721787 48.1669639,149.481395 L49.473636,145.69394 L49.8239756,146.11056 Z"
				/>
				<path
					fill="#191919"
					d="M48.1669639 149.48613C50.5341235 150.726521 51.0691016 149.779658 51.0691016 149.779658L51.0691016 151.199953 52.0917145 153.832235C51.2720385 154.216367 50.3788393 154.418266 49.473636 154.424025 48.4143486 154.393078 47.3617033 154.245421 46.3347823 153.983733L44.7961286 151.910101 44.7961286 150.963237 48.1669639 149.48613zM53.3983866 105.158699C53.9002245 105.660537 58.6061378 107.464312 58.6061378 107.464312L58.5256543 108.373302 53.7534606 106.697353C53.7534606 106.697353 54.0091138 107.800449 54.2837043 108.59108 54.5582948 109.381712 57.9528017 113.382211 57.9528017 113.382211 58.038647 114.380059 57.9374943 115.385163 57.6545396 116.345895 57.1811077 118.059719 54.4020623 119.773542 54.4020623 119.773542L51.7981867 119.773542C51.9638879 119.219627 51.5188619 117.586287 51.0833045 116.246474 51.6049413 116.343902 52.138864 116.356691 52.6645671 116.284349 53.7689047 116.167517 54.6872946 115.382745 54.9749149 114.310138 55.3110516 113.207041 54.5393576 112.24124 54.1464091 111.351188 53.7534606 110.461136 48.5031005 104.155023 48.5031005 104.155023 49.1002186 103.548191 49.9247775 103.220085 50.7755738 103.250768 52.2905559 103.246034 52.8918145 104.656861 53.3983866 105.158699z"
				/>
				<path
					fill="#4C4C4C"
					d="M44.6777706 95.2781745C42.2490648 95.2781745 41.8987252 94.3881225 40.8903152 93.3844469 39.8819052 92.3807712 38.9965875 88.7069395 37.2780296 86.9931159 36.1562546 85.90904 34.8410305 85.0450711 33.4006222 84.4460521L33.589995 82.9452729C33.589995 82.9452729 34.3806263 77.1078573 33.589995 74.1110333 33.0523162 71.9371632 32.6241105 69.7376709 32.3069944 67.5208609L32.3069944 63.0848038 41.4252933 66.3988272 43.6125488 69.4145886C43.6125488 69.4145886 44.1759328 70.3614524 46.0365202 73.3772138 49.0570159 76.3977094 50.3826253 79.119943 50.3826253 83.7927161 50.3826253 88.4654892 43.7545783 91.1924571 43.7545783 91.1924571L44.6777706 95.2781745zM49.2937318 49.1990455C49.1350145 49.0332028 48.9569978 48.8869748 48.7634881 48.7634881 46.656716 47.5372994 44.4552576 48.9386579 43.2622091 50.5956696 42.3863601 51.8123897 42.0596921 54.0469884 42.0596921 54.0469884 42.0596921 54.0469884 39.4700194 51.2063968 36.378509 48.3089934L41.1364998 46.4957492 46.4626089 46.0223173C47.0023213 46.7277308 49.014407 47.8687018 49.2937318 49.1990455z"
				/>
				<path
					fill="#E5E5E5"
					d="M46.4531403,46.0175829 L41.1270312,46.4910149 L36.3690403,48.3042591 C35.8529995,47.8308272 35.3227558,47.324255 34.7877777,46.8366202 L37.7514616,44.5972872 L37.7514616,41.9318654 C36.3027599,40.4784294 35.5358002,38.5042183 35.0339623,36.6957084 C34.1533789,33.5852606 34.3143458,31.7862193 34.9298073,30.7304661 C35.4243522,29.9506418 36.2393812,29.4304105 37.1549373,29.3101704 C39.2238348,28.888816 40.0665437,30.5316247 40.9992046,30.4842815 C42.8929322,30.3848608 42.9828843,32.2454483 42.9923529,32.3780092 C43.0538991,33.2964672 42.6704192,33.6752127 42.9497441,34.3096115 C43.200663,34.8729955 43.5841429,34.7830434 43.8587334,35.3369587 C44.1806671,35.9997634 43.7261724,36.3122285 43.8208588,37.3490444 C43.9530572,38.1927483 44.2611369,38.9992396 44.7251138,39.716204 C45.1085936,40.4216176 45.2364203,40.4689608 45.3169037,40.8619093 C45.4873392,41.6904152 45.0470475,42.206456 44.9239552,42.8313861 C44.7156451,43.8303275 45.4115901,44.6730363 46.4531403,46.0175829 Z"
				/>
				<path
					fill="#4C4C4C"
					d="M39.2569751,99.6621542 C38.5752331,99.1319104 37.9881775,98.6821501 37.5762917,98.4122939 C36.5172546,97.7210468 35.4097022,97.1071463 34.2622683,96.575378 C35.4554104,96.2693253 36.6042294,95.8110706 37.6804468,95.2118941 L39.2569751,99.6621542 Z"
				/>
				<path
					fill="#E5E5E5"
					fillRule="nonzero"
					d="M37.5762917,98.4122939 C37.9881775,98.6821501 38.5752331,99.1319104 39.2569751,99.6621542 L37.6804468,95.2166284 C36.6042294,95.8158049 35.4554104,96.2740596 34.2622683,96.5801123 C35.4095633,97.1103539 36.5171122,97.7226703 37.5762917,98.4122939 Z M53.6729771,124.095976 C53.6729771,125.279556 54.619841,135.339984 56.726613,138.919129 L54.383125,137.1769 L48.0533402,123.565732 L48.0533402,122.088624 L46.5099521,119.778277 L43.9060766,112.79989 L42.1354412,107.828855 C38.2012219,106.54112 30.1150046,105.035606 27.6389557,104.330193 C26.6094846,104.21663 25.6139571,103.894453 24.7131464,103.383329 C23.7191907,102.824783 22.8416721,102.08066 22.1282081,101.191339 C21.7147883,100.693062 21.3560792,100.151824 21.0582519,99.5769364 C20.1113881,97.7400205 20.9351596,95.8462929 22.8904335,93.3655096 C24.2586517,91.6280144 28.8367384,87.9541827 31.4784886,85.8947538 C32.6147252,85.0094361 33.3722163,84.4271149 33.3722163,84.4271149 C34.8126246,85.0261338 36.1278486,85.8901027 37.2496237,86.9741786 C38.9681816,88.6880022 39.8534993,92.3570996 40.8619093,93.3655096 C41.8703193,94.3739196 42.2206589,95.2592373 44.6493647,95.2592373 L46.7798083,104.254444 C47.3457768,104.345933 47.9250863,104.308714 48.4746946,104.145554 C48.4746946,104.145554 53.6824458,110.461136 54.0990659,111.346454 C54.515686,112.231772 55.2637084,113.202307 54.9275717,114.305404 C54.6399514,115.378011 53.7215615,116.162782 52.6172239,116.279615 C52.0915208,116.351956 51.5575981,116.339168 51.0359613,116.24174 C51.4715187,117.581552 51.9165447,119.214893 51.7508435,119.768808 L52.3994453,119.768808 C52.3994453,119.768808 53.6729771,122.912396 53.6729771,124.095976 Z"
				/>
				<path
					fill="#0D0D0D"
					d="M13.0761897,78.2109537 C13.0761897,78.2109537 14.1792861,80.5781133 18.7573728,81.3687446 C23.3354595,82.159376 33.6136665,82.9452729 33.6136665,82.9452729 L33.4242938,84.4460521 C33.4242938,84.4460521 32.6525997,85.0283734 31.5305661,85.9136911 C30.8535584,85.8095361 23.5106293,84.6448936 19.3917716,83.8542622 C16.7547592,83.3514253 14.2322781,82.3693907 11.9494217,80.9568589 L13.0761897,78.2109537 Z"
				/>
				<path
					fill="#4C4C4C"
					d="M24.722615,103.407001 C25.6234257,103.918124 26.6189533,104.240301 27.6484243,104.353865 C30.1244733,105.059278 38.2106905,106.564792 42.1449098,107.852526 L43.9060766,112.818827 L46.5099521,119.778277 L48.0533402,122.088624 L48.0533402,123.565732 L54.383125,137.181634 L56.726613,138.923864 L59.2358022,140.789185 L64.0269333,149.367772 L63.6623907,149.779658 C62.9569771,150.570289 61.3757145,152.321987 60.1258542,153.567113 C58.4641082,155.224125 53.1379991,156.526062 53.1379991,156.526062 L52.0775116,153.832235 L51.0548986,151.199953 L51.0548986,149.779658 L51.0548986,149.367772 L49.8097726,146.115294 L49.459433,145.698674 L45.5110108,141.025901 L37.8130077,125.932892 L32.4300867,115.692559 C29.5090118,113.415352 24.855176,103.681591 24.722615,103.407001 Z"
				/>
				<polygon
					fill="#A3A3A3"
					points="20.76 3.532 20.192 3.054 21.461 3.054 22.346 4.237 22.919 4.829 23.118 5.719 23.728 6.093 23.648 6.704 23.269 7.177"
				/>
				<path
					fill="#A3A3A3"
					d="M19.0509006 2.09730342L20.139794.113623662C20.3257901-.000281121914 20.5520463-.0279154607 20.7599898.0378745539 21.0866579.156232535 21.1055951.629664458 21.1055951.629664458L20.1918715 3.0536359 19.0509006 2.09730342zM19.3775686 4.37924529C19.3775686 4.37924529 20.3244325 4.06678022 20.6226946 4.37924529 20.9209567 4.69171036 20.6226946 5.70958899 20.6226946 5.70958899L19.6142846 7.35239777 18.3738929 6.87896584 18.2934095 6.87896584 18.4875166 5.5391535 19.3775686 4.37924529z"
				/>
				<polygon fill="#A3A3A3" points="18.563 2.973 19.543 3.608 18.327 3.565" />
				<path
					fill="#E5E5E5"
					fillRule="nonzero"
					d="M32.0702785,31.6015809 C32.4752262,30.5051344 33.0399757,29.4745462 33.7462275,28.5432107 C33.5981132,27.2208044 33.3624582,25.909677 33.0408139,24.61846 C32.7236145,23.4490832 29.5042775,18.7810444 27.6484243,15.6232535 C26.5350139,13.718857 25.6226946,11.7038214 24.9261908,9.61066804 L23.269179,7.20089955 L20.7599898,3.55547374 L20.1918715,3.08204182 L19.0509006,2.13517797 L16.773693,2.25353595 C16.9136666,2.46001982 17.07213,2.65334511 17.247125,2.8311229 C17.4980439,3.08204182 18.582203,3.01102703 18.582203,3.01102703 L19.5622071,3.64542581 L18.345487,3.60281694 L17.455435,3.5696767 L16.5085712,5.15567364 L16.3996818,6.69432739 L16.224512,6.75113923 L16.224512,7.34292913 L16.5701173,7.57491077 L17.4175605,8.19984091 C17.4175605,8.19984091 18.255535,8.01993678 18.463845,8.4933687 C18.6721551,8.96680063 19.4675207,10.4770485 20.3859786,10.4770485 C20.8546461,10.4894322 21.3228397,10.4384723 21.7778685,10.3255502 L22.1897542,11.4807241 L25.9772096,22.6395146 C28.4193756,23.3616252 30.387401,25.1774566 31.3033188,27.5537379 L28.7183805,29.0734544 L29.1160633,30.654717 C29.1160633,30.654717 29.9398348,37.9929118 30.2996431,39.5883774 C30.6594513,41.183843 31.7767507,44.3226967 31.7767507,44.3226967 C32.8081092,42.9230238 33.4234875,41.260682 33.5521204,39.5268313 C33.7509618,35.7867191 31.1518205,34.1439103 32.0702785,31.6015809 Z M20.6226946,5.70958899 L19.6142846,7.35239777 L18.3738929,6.87896584 L18.2934095,6.87896584 L18.4875166,5.5391535 L19.3775686,4.41711984 C19.3775686,4.41711984 20.3244325,4.10465477 20.6226946,4.41711984 C20.9209567,4.72958491 20.6226946,5.70958899 20.6226946,5.70958899 Z"
				/>
				<path
					fill="#A3A3A3"
					d="M17.6021989,12.1293259 C17.6021989,11.4901928 17.4838409,9.36921776 17.4364977,8.53597758 C17.4364977,8.32293321 17.4364977,8.19510659 17.4364977,8.19510659 C17.4364977,8.19510659 18.2744722,8.01520246 18.4827823,8.48863438 C18.6910923,8.96206631 19.486458,10.4723141 20.4049159,10.4723141 C20.8670523,10.484549 21.3287604,10.435194 21.7778685,10.3255502 L22.1897542,11.4807241 C21.8515641,11.9762864 21.5734465,12.5102723 21.3612484,13.0714554 C21.2092497,13.6932875 21.1094819,14.3267342 21.0629863,14.9651831 C19.7362789,14.8187984 18.4415998,14.4607637 17.2281877,13.9046956 C17.4379759,13.334083 17.5639557,12.7360773 17.6021989,12.1293259 Z"
				/>
				<path
					fill="#E5E5E5"
					d="M49.5304478,54.7760735 C49.3316064,55.1358818 49.1232964,55.4814871 48.9007833,55.8034208 L48.8202999,55.9265131 C48.2039001,56.8236816 47.4769884,57.6396678 46.656716,58.3552189 C45.2053857,59.6484268 43.5059752,60.6326351 41.6620092,61.2478879 C39.5315656,60.0643081 38.9729159,59.1269129 37.7751332,57.9338644 C36.5773504,56.740816 28.8793473,46.4815462 28.8793473,46.4815462 C28.1812212,46.8371355 27.4461505,47.11497 26.6873575,47.3100521 C25.6125999,47.5087722 24.5262164,47.6384425 23.4348802,47.6982663 C22.544075,48.513131 21.604978,49.2735782 20.6226946,49.9754738 C20.0753649,50.2220957 19.4651029,50.2932103 18.8757308,50.1790495 L22.2181602,47.1632882 L20.6226946,47.1632882 C20.1157983,47.4128093 19.577538,47.5927602 19.0224947,47.6982663 C18.3464404,47.7614942 17.6645226,47.7005227 17.010409,47.5183621 L17.010409,46.8697604 L18.6390148,46.5762326 L16.5985232,46.5762326 C16.3334014,46.5762326 16.447025,45.7761327 16.447025,45.7761327 L18.0756308,45.335841 L18.255535,44.8008629 L24.2302458,44.1522612 C24.2302458,44.1522612 24.8741132,43.7971872 25.7120878,43.408973 C26.6968262,42.9355411 27.9419521,42.4621092 28.7183805,42.4621092 C30.1623478,42.4621092 31.0855401,43.7782499 31.7767507,44.327431 C32.7236145,45.0801877 33.7746334,45.9560368 34.7877777,46.8650261 C35.3227558,47.338458 35.8529995,47.8450302 36.3690403,48.332665 C39.4463478,51.2490057 42.0502234,54.07066 42.0502234,54.07066 C42.0502234,54.07066 42.3768914,51.8360613 43.2527405,50.6193412 C44.445789,48.9623295 46.6472474,47.560971 48.7540195,48.7871597 C48.9547902,48.9031768 49.1407811,49.0430673 49.3079348,49.2037798 C50.2642673,50.1222377 51.0406956,51.9970281 49.5304478,54.7760735 Z"
				/>
				<path
					fill="gray"
					d="M14.4396737,28.9740337 C14.4396737,30.6310454 14.4396737,33.812508 16.0398736,35.4079735 L16.0966854,38.8214177 C22.5637655,39.6499236 24.3012606,41.7803672 24.3012606,41.7803672 C24.8041278,42.2803257 25.2693581,42.8167648 25.6931505,43.3853014 C24.855176,43.7735156 24.2113086,44.1285896 24.2113086,44.1285896 L18.255535,44.7961286 L18.0756308,45.3311066 L16.447025,45.7713983 C16.447025,45.7713983 16.3334014,46.5714983 16.5985232,46.5714983 L18.6390148,46.5714983 L17.010409,46.8697604 L17.010409,47.5230965 C17.6645226,47.705257 18.3464404,47.7662285 19.0224947,47.7030006 C19.577538,47.5974945 20.1157983,47.4175436 20.6226946,47.1680225 L22.2181602,47.1680225 L18.8757308,50.1837839 C19.4651029,50.2979446 20.0753649,50.22683 20.6226946,49.9802081 C21.604978,49.2783125 22.544075,48.5178653 23.4348802,47.7030006 C24.5262164,47.6431768 25.6125999,47.5135066 26.6873575,47.3147864 C27.4463426,47.11819 28.1814197,46.8387655 28.8793473,46.4815462 C28.8793473,46.4815462 36.5584131,56.740816 37.7514616,57.9338644 C38.94451,59.1269129 39.507894,60.0643081 41.6383376,61.2478879 C43.4906982,60.6355492 45.1984147,59.6511956 46.656716,58.3552189 L46.8082142,58.4641082 L47.2816462,59.3588945 L48.5457094,61.8349435 L48.5457094,66.157377 L46.1170036,67.2794106 L44.8718777,69.2914963 L43.631486,69.4098543 L41.4442306,66.3940929 L32.3259317,63.0800694 L32.3259317,67.5161266 C32.6444538,69.7346085 33.0742405,71.9356855 33.6136665,74.1110333 C34.4042979,77.1078573 33.6136665,82.9452729 33.6136665,82.9452729 C33.6136665,82.9452729 23.3591311,82.159376 18.7810444,81.3687446 C14.2029577,80.5781133 13.0998613,78.2109537 13.0998613,78.2109537 L12.7826619,64.9548599 C12.7826619,64.9548599 9.78583785,59.1174443 8.36554208,55.3299889 C6.94524631,51.5425335 6.47181439,46.8082142 7.00205814,45.1512025 C7.32346099,44.173986 8.13079388,43.4348279 9.1325018,43.200663 C9.1325018,43.200663 9.60593372,40.7104111 9.96574198,39.6499236 C10.3255502,38.5894361 11.6795655,37.046048 11.6795655,37.046048 L13.3365773,25.7973055 L12.6264294,24.0834819 L13.2560939,22.0761306 L14.4396737,21.4227945 L15.4433493,19.1692586 L16.9204569,13.7863376 C16.9204569,13.7863376 17.0293463,13.8431494 17.2281877,13.9331015 C18.4415998,14.4891696 19.7362789,14.8472043 21.0629863,14.993589 C21.3233738,14.993589 21.5837614,15.0314636 21.8441489,15.0314636 L20.8310046,18.6390148 L21.8441489,20.3575727 L21.3044365,22.0761306 L21.3044365,22.1282081 C17.4270291,22.483282 14.4396737,24.7841612 14.4396737,28.9740337 Z"
				/>
				<path
					fill="#A3A3A3"
					d="M15.6232535,31.5400347 C16.4943682,31.5400347 17.2423906,32.4868986 17.2423906,32.4868986 L18.3880959,32.6431311 L18.5585314,29.8262112 L19.3112881,29.4900745 C19.3112881,29.4900745 19.131384,27.5158634 20.021436,26.649483 C20.911488,25.7831025 24.3580724,24.5947884 27.0424315,26.4506416 C27.7243263,27.259667 28.1930436,28.2263965 28.4059154,29.2628272 C28.7766585,30.8633043 28.8409152,32.5195196 28.5952882,34.1439103 C28.1218562,37.7798675 27.4495829,39.6688608 27.0329628,40.5494442 C26.8363895,40.9484437 26.4266461,41.197612 25.9819439,41.1885773 L24.61846,41.1885773 L24.3012606,41.7803672 C24.3012606,41.7803672 22.5827027,39.6688608 16.0966854,38.8214177 L16.0209363,35.3890363 L16.0209363,35.1901949 C16.0209363,35.1901949 14.9557145,33.7320245 14.9557145,32.8609098 C14.9557145,31.9897951 15.1498215,31.5400347 15.6232535,31.5400347 Z"
				/>
				<path
					fill="#191919"
					d="M16.0398736 35.4079735C14.444408 33.812508 14.4396737 30.6310454 14.4396737 28.9740337 14.4396737 24.7841612 17.4270291 22.483282 21.3091709 22.1282081 21.59323 22.0950679 21.8867578 22.0808649 22.1802856 22.0761306 23.4650195 22.0618739 24.7437309 22.2536806 25.967741 22.6442489 28.4124856 23.3628153 30.3842328 25.1771027 31.3033188 27.5537379L28.7183805 29.0734544 28.3917124 29.2628272C28.1829946 28.2277504 27.719217 27.2611403 27.0424315 26.4506416 24.3580724 24.5947884 20.8878165 25.7594309 20.021436 26.649483 19.1550556 27.539535 19.3112881 29.4900745 19.3112881 29.4900745L18.5585314 29.8262112 18.3644243 32.6668027 17.218719 32.5105702C17.218719 32.5105702 16.4706966 31.5637063 15.5995819 31.5637063 15.1687588 31.5637063 14.9699174 32.0371382 14.9699174 32.9035187 14.9699174 33.7698991 16.0351392 35.2328037 16.0351392 35.2328037L16.0398736 35.4079735zM12.2476839 150.844879C12.6832412 150.844879 13.6679796 150.627101 14.103537 151.043721 14.5390944 151.460341 14.6148435 152.501891 14.6148435 152.501891 14.2976441 153.647596 12.768459 155.465575 11.4996614 156.739107 10.2308639 158.012639 5.61963693 159.129938 4.43605712 159.404529 3.25247731 159.679119.946863846 159.210421.946863846 159.210421L.946863846 157.435052C.762809412 156.872168.649887254 156.288472.610727181 155.697557.648675976 155.114213.761652213 154.538193.946863846 153.983733L5.20775116 154.869051C5.20775116 154.869051 7.33819481 153.212039 8.52177462 152.856965 9.70535443 152.501891 10.7090301 152.090005 10.7090301 152.090005 10.9091921 151.744793 11.0909289 151.389221 11.2534768 151.024784 11.5768779 150.926864 11.9104761 150.866499 12.2476839 150.844879z"
				/>
				<path
					fill="#4C4C4C"
					d="M11.9494217,80.9568589 C14.2189624,82.366244 16.7266019,83.3497264 19.3491627,83.8589966 C23.4680204,84.6496279 30.8109496,85.8142704 31.4879572,85.9184254 C28.8462071,87.9778543 24.2681204,91.651686 22.8999021,93.3891812 C20.9446283,95.8699645 20.1208567,97.7636921 21.0677206,99.600608 C21.3655479,100.175495 21.7242569,100.716733 22.1376767,101.215011 L19.0509006,111.554764 L15.8599694,122.377418 L13.9662417,130.548853 L12.4228537,143.449873 C12.1807698,145.078732 12.0227498,146.718979 11.9494217,148.364096 C11.8933169,149.287357 11.6585741,150.190956 11.2582111,151.024784 C11.0958144,151.39083 10.9140758,151.747986 10.7137644,152.09474 C10.7137644,152.09474 9.71008875,152.506625 8.52650894,152.861699 C7.34292913,153.216773 5.21248547,154.873785 5.21248547,154.873785 L0.951598166,153.988467 C0.408493775,152.668018 0.08851708,151.266521 0.00473431923,149.841204 C0.00473431923,147.947476 1.6001999,145.760221 1.6001999,145.760221 C1.6001999,145.760221 3.25721163,131.737167 3.84900154,127.712996 C4.44079144,123.688824 8.81530241,112.676798 8.81530241,112.676798 L8.81530241,101.134527 C8.81530241,98.592198 10.3539562,93.3844469 10.3539562,93.3844469 C10.3539562,93.3844469 9.76216626,88.5270353 10.3539562,85.511274 C10.6169159,83.9119155 11.1568288,82.3706805 11.9494217,80.9568589 Z"
				/>
				<path
					fill="gray"
					d="M54.264767,48.9386579 C53.9049588,49.8429129 54.5867007,50.1979868 54.4446712,51.8976074 C54.4412257,52.7669433 54.1719479,53.6144249 53.6729771,54.3263132 C52.8586742,55.3299889 51.8218583,55.2210995 51.6608915,55.9833249 C51.621426,56.5507284 51.8934372,57.094751 52.3710393,57.4036207 C53.2090139,57.9954106 54.6671842,57.7397574 55.8649669,56.6319267 C53.8150067,59.2973484 51.7555778,59.3825661 50.3778909,58.6487466 C49.7702095,58.316615 49.2756246,57.8104898 48.9575952,57.1953106 C48.7287215,56.8134006 48.6868744,56.3478514 48.8439715,55.9312474 L48.9244549,55.8081551 C49.1469679,55.4862214 49.355278,55.1406161 49.5541194,54.7808078 C51.0643672,52.0017624 50.2879389,50.126972 49.3174034,49.2085141 C49.0380786,47.8781704 47.0259929,46.7371995 46.4768119,46.0270516 C45.4352617,44.6825049 44.7393167,43.8397961 44.9381582,42.8313861 C45.0612505,42.206456 45.5015421,41.6904152 45.3311066,40.8619093 C45.2506232,40.4689608 45.1227966,40.4216176 44.7393167,39.716204 C44.2753398,38.9992396 43.9672601,38.1927483 43.8350618,37.3490444 C43.7403754,36.3122285 44.19487,35.9997634 43.8729363,35.3369587 C43.5983458,34.7735748 43.214866,34.8635268 42.963947,34.3096115 C42.6846222,33.6752127 43.0681021,33.2964672 43.0065559,32.3780092 C43.0065559,32.2454483 42.9071352,30.3848608 41.0134075,30.4842815 C40.0665437,30.5316247 39.2380378,28.888816 37.1691403,29.3101704 C36.2535842,29.4304105 35.4385552,29.9506418 34.9440103,30.7304661 C34.3285488,31.7862193 34.1675819,33.5710577 35.0481653,36.6957084 C35.5594718,38.5042183 36.3264315,40.4831638 37.7751332,41.9318654 L37.7751332,44.6209588 L34.7877777,46.8697604 C33.7746334,45.9607711 32.7472861,45.084922 31.7767507,44.3321653 C32.8081092,42.9324924 33.4234875,41.2701506 33.5521204,39.5362999 C33.7509618,35.7961877 31.1518205,34.1533789 32.0702785,31.6110495 C32.4752262,30.514603 33.0399757,29.4840149 33.7462275,28.5526793 C34.9913534,26.9051362 37.0129078,25.2386558 40.0618093,25.2386558 C41.8828855,25.2868129 43.6508504,25.8624294 45.1512025,26.8956676 C47.2532403,28.5858195 46.670919,29.9161632 48.8771118,31.6299868 C50.6666844,33.012408 51.5188619,32.5105702 52.2526814,33.6988843 C53.2326854,35.2801469 51.8455299,36.364306 52.6645671,39.0249934 C53.2184825,40.8098318 53.9665049,40.7340827 54.264767,42.518921 C54.5109516,43.972357 54.1369404,44.7771913 54.7950108,45.5962285 C55.4530812,46.4152658 56.5230373,46.3395166 56.5751148,46.8366202 C56.6413953,47.4710189 54.7950108,47.6035799 54.264767,48.9386579 Z"
				/>
			</g>
		</g>
	</svg>
)
