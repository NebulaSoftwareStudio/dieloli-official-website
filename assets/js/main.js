const light = [
    ["--main-text-color", "#353535"],
    ["--main-background-color", "#f8f8f8"],
    ["--primary-button-color", "#888888"],
    ["--primary-button-text-color", "#ffffff"],
    ["--link-active-color", "#888888"],
    ["--app-title-color", "#888888"],
    ["--app-sub-title-color", "#000000"],
    ["--page-header-background", "rgba(255,255,255,.7)"],
    ["--description-text-color", "#888888"],
    ["--description-bold-text-color", "#000000"],
    ["--card-box-background-color", "#ffffff"],
    ["--in-icon", "url(\"data:image/svg+xml,%0A%3Csvg t='1648039621661' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2860' width='200' height='200'%3E%3Cpath d='M499.712 0C789.3504 0 1024 229.2224 1024 512S789.2992 1024 499.712 1024c-163.3792 0-314.4704-73.5744-413.184-196.9152a32.9728 32.9728 0 0 1 5.888-47.0016 34.816 34.816 0 0 1 48.128 5.7856c85.9136 107.264 217.088 171.1616 359.2192 171.1616 251.648 0 455.68-199.2704 455.68-445.0304 0-245.76-204.032-445.0304-455.68-445.0304a458.8032 458.8032 0 0 0-355.5328 166.656 34.816 34.816 0 0 1-48.2304 5.1712 32.9728 32.9728 0 0 1-5.2736-47.104C189.5936 71.3728 338.688 0 499.7632 0z m27.904 351.3344l138.5984 138.5984c13.4144 13.4144 13.6704 34.816 0.5632 47.9232L531.456 673.28a33.8944 33.8944 0 0 1-47.9744-0.5632 33.8944 33.8944 0 0 1-0.512-47.9744l79.2064-79.2576-527.872 0.0512A33.8944 33.8944 0 0 1 0 512c0-18.4832 15.36-33.4848 34.304-33.4848h525.7216L480.256 398.6944a33.8944 33.8944 0 0 1-0.512-47.9744 33.8944 33.8944 0 0 1 47.872 0.5632z' fill='%23ffffff' p-id='2861'%3E%3C/path%3E%3C/svg%3E\")"],
    ["--windows-icon", "url(\"data:image/svg+xml,%3Csvg t='1649945056423' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='8330' width='200' height='200'%3E%3Cpath d='M523.8 191.4v288.9h382V128.1zM523.8 833.6l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zM120.1 770.6L443 823.2V543.8H120.1z' p-id='8331' fill='%23353535'%3E%3C/path%3E%3C/svg%3E\")"],
    ["--mac-icon", "url(\"data:image/svg+xml,%3Csvg t='1649945133867' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='8520' width='200' height='200'%3E%3Cpath d='M747.4 535.7c-0.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7z' p-id='8521' fill='%23353535'%3E%3C/path%3E%3Cpath d='M642.3 230.7c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z' p-id='8522' fill='%23353535'%3E%3C/path%3E%3C/svg%3E\")"],
    ["--package-icon", "url(\"data:image/svg+xml,%3Csvg t='1649943261239' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='4325' width='200' height='200'%3E%3Cpath d='M519.168 507.733333c-6.058667 0-12.117333-1.493333-16.64-2.986666L90.709333 338.176c-18.176-6.016-28.757333-22.698667-28.757333-42.368 0-19.669333 10.581333-34.816 28.757333-42.410667l410.282667-164.992a42.410667 42.410667 0 0 1 33.28 0l411.818667 164.992c16.64 7.594667 28.757333 24.234667 28.757333 42.410667 0 18.176-10.581333 34.816-28.757333 42.410667l-410.282667 164.992a39.466667 39.466667 0 0 1-16.64 4.565333zM228.48 295.850667l289.152 116.565333 289.194667-116.565333L519.168 179.2 228.48 295.808z' fill='%23353535' p-id='4326'%3E%3C/path%3E%3Cpath d='M519.168 930.133333c-6.058667 0-12.117333-1.493333-16.64-2.986666L90.709333 762.026667c-16.64-7.552-28.757333-24.192-28.757333-42.368V295.765333c0-25.728 19.626667-45.397333 45.397333-45.397333 25.728 0 45.44 19.669333 45.44 45.397333v392.106667l366.378667 146.901333 366.378667-146.858666v-392.106667c0-25.770667 19.669333-45.44 45.397333-45.44 25.770667 0 45.44 19.669333 45.44 45.397333v423.936c0 18.176-10.581333 34.816-28.757333 42.368l-411.818667 165.034667c-6.058667 1.536-10.581333 3.029333-16.64 3.029333z' fill='%23353535' p-id='4327'%3E%3C/path%3E%3Cpath d='M519.168 930.133333a44.629333 44.629333 0 0 1-45.44-45.44V460.8c0-25.728 19.669333-45.44 45.44-45.44 25.728 0 45.397333 19.712 45.397333 45.44v423.893333c0 25.770667-21.205333 45.44-45.397333 45.44zM734.122667 422.954667c-6.058667 0-10.581333-1.536-16.64-3.029334L304.213333 254.890667c-22.698667-9.088-34.816-36.309333-25.728-59.050667 10.581333-22.698667 36.309333-34.816 59.050667-25.728l411.776 165.034667c22.741333 9.088 34.816 36.309333 25.770667 59.050666a42.24 42.24 0 0 1-40.917334 28.757334z' fill='%23353535' p-id='4328'%3E%3C/path%3E%3C/svg%3E\")"],
    ["--dark-mode-button-background", "url(\"data:image/svg+xml,%3Csvg t='1651384268993' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2144' width='200' height='200'%3E%3Cpath d='M439.04383639 224.33271976a289.43717504 289.43717504 0 0 0-89.06329676 39.44690807c-27.5075319 18.12412161-51.158867 39.64960558-70.96389486 64.57645191-19.79019562 24.92684633-35.31880082 53.25011237-46.62042137 84.97474006C221.10449032 445.05050411 215.45368042 478.01109252 215.45368042 512c0 40.16870887 7.81621301 78.48347702 23.45358166 115.04318192 15.64725682 36.67341315 36.77228986 68.19039996 63.2910532 94.76354538 26.53359488 26.56820206 58.11485196 47.57952611 94.69927585 63.23667111 36.59431134 15.65714501 75.00301286 23.48324474 115.16183354 23.48324475 33.97407594 0 66.85061917-5.56182137 98.62468557-16.89310498 31.76417894-11.32633953 60.10227581-26.77584294 85.01429133-46.65502781 24.87740834-19.77536407 46.43255539-43.46625042 64.57150781-70.96389488a290.15403174 290.15403174 0 0 0 39.43701989-88.98913905c-8.3056532 0.72180079-17.71378249 1.13213991-28.0958481 1.1321392-45.21637032 0-88.35138342-8.85936294-129.45942212-26.46932463-41.1327577-17.71872658-76.62459295-41.50848964-106.44089858-71.27535655C505.84007277 458.54719011 482.10963587 423.01086095 464.42057238 381.91765379 446.7562286 340.81455917 437.94135957 297.65977044 437.94135957 252.4483442c0-10.40184195 0.39550758-19.77536407 1.15685891-28.01674772l-0.049438-0.09887672zM512.02976157 141.21192041c8.32542811 0 16.51242896 0.31146168 24.6054972 0.92944167-16.4036648 35.32374419-24.60549719 72.09603405-24.60549719 110.30698212 0 35.12104668 6.84227598 68.69961578 20.58121076 100.83458258 13.70927096 32.03114601 32.15474243 59.63261126 55.35124448 82.80933769 23.16683898 23.17178306 50.76830423 41.60736635 82.82416923 55.30674985 32.02125855 13.69938351 65.654209 20.60098567 100.78514387 20.60098568 38.23072298 0 75.03267594-8.24138293 110.35147675-24.62032874 0.59326099 8.14250622 0.86517214 16.28006837 0.86517213 24.62032874 0 33.57856837-4.43956893 66.43533597-13.29893256 98.46648269-8.90880166 32.03114601-21.28817928 61.69419283-37.24195443 88.78149743-15.92411206 27.19112615-35.31880082 52.11797247-58.09013296 74.87941716-22.77627549 22.76144395-47.74267309 42.12152555-74.87447306 58.09013223-27.15157487 15.96366261-56.75529553 28.32326532-88.78644152 37.28644905A368.16784419 368.16784419 0 0 1 512.00009921 882.78807959a368.20739474 368.20739474 0 0 1-98.48625832-13.28904439c-32.03609009-8.95824037-61.6249792-21.31784236-88.79138561-37.28150569-27.12685589-15.96860669-52.08336529-35.32868827-74.89919206-58.09013223-22.7515565-22.76144395-42.13635709-47.68829101-58.05058169-74.87941715-15.96366261-27.0922487-28.34304097-56.75529553-37.2518426-88.78149744A367.9354836 367.9354836 0 0 1 141.21201889 512c0-33.57856837 4.4494571-66.43533597 13.30882004-98.46648269 8.90880166-32.03114601 21.28817928-61.69419283 37.25184259-88.78149744 15.91916798-27.19112615 35.29902519-52.11797247 58.0505817-74.87941715 22.81582676-22.86526476 47.77233617-42.22534634 74.89919206-58.09013223C351.89380578 175.81880789 381.4826949 163.36032846 413.51878498 154.50096479A368.20739474 368.20739474 0 0 1 512.00009921 141.21192041h0.02966236z' p-id='2145' fill='%23353535'%3E%3C/path%3E%3C/svg%3E\")"],
];
const dark = [
    ["--main-text-color", "#ffffff"],
    ["--main-background-color", "#000000"],
    ["--primary-button-color", "#d9d9d9"],
    ["--primary-button-text-color", "#000000"],
    ["--link-active-color", "#d9d9d9"],
    ["--app-title-color", "#cccccc"],
    ["--app-sub-title-color", "#ffffff"],
    ["--page-header-background", "rgba(0,0,0,.7)"],
    ["--description-text-color", "#d9d9d9"],
    ["--description-bold-text-color", "#ffffff"],
    ["--card-box-background-color", "#222222"],
    ["--in-icon", "url(\"data:image/svg+xml,%0A%3Csvg t='1648039621661' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2860' width='200' height='200'%3E%3Cpath d='M499.712 0C789.3504 0 1024 229.2224 1024 512S789.2992 1024 499.712 1024c-163.3792 0-314.4704-73.5744-413.184-196.9152a32.9728 32.9728 0 0 1 5.888-47.0016 34.816 34.816 0 0 1 48.128 5.7856c85.9136 107.264 217.088 171.1616 359.2192 171.1616 251.648 0 455.68-199.2704 455.68-445.0304 0-245.76-204.032-445.0304-455.68-445.0304a458.8032 458.8032 0 0 0-355.5328 166.656 34.816 34.816 0 0 1-48.2304 5.1712 32.9728 32.9728 0 0 1-5.2736-47.104C189.5936 71.3728 338.688 0 499.7632 0z m27.904 351.3344l138.5984 138.5984c13.4144 13.4144 13.6704 34.816 0.5632 47.9232L531.456 673.28a33.8944 33.8944 0 0 1-47.9744-0.5632 33.8944 33.8944 0 0 1-0.512-47.9744l79.2064-79.2576-527.872 0.0512A33.8944 33.8944 0 0 1 0 512c0-18.4832 15.36-33.4848 34.304-33.4848h525.7216L480.256 398.6944a33.8944 33.8944 0 0 1-0.512-47.9744 33.8944 33.8944 0 0 1 47.872 0.5632z' fill='%23000000' p-id='2861'%3E%3C/path%3E%3C/svg%3E\")"],
    ["--windows-icon", "url(\"data:image/svg+xml,%3Csvg t='1649945056423' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='8330' width='200' height='200'%3E%3Cpath d='M523.8 191.4v288.9h382V128.1zM523.8 833.6l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zM120.1 770.6L443 823.2V543.8H120.1z' p-id='8331' fill='%23ffffff'%3E%3C/path%3E%3C/svg%3E\")"],
    ["--mac-icon", "url(\"data:image/svg+xml,%3Csvg t='1649945133867' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='8520' width='200' height='200'%3E%3Cpath d='M747.4 535.7c-0.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7z' p-id='8521' fill='%23ffffff'%3E%3C/path%3E%3Cpath d='M642.3 230.7c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z' p-id='8522' fill='%23ffffff'%3E%3C/path%3E%3C/svg%3E\")"],
    ["--package-icon", "url(\"data:image/svg+xml,%3Csvg t='1649943261239' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='4325' width='200' height='200'%3E%3Cpath d='M519.168 507.733333c-6.058667 0-12.117333-1.493333-16.64-2.986666L90.709333 338.176c-18.176-6.016-28.757333-22.698667-28.757333-42.368 0-19.669333 10.581333-34.816 28.757333-42.410667l410.282667-164.992a42.410667 42.410667 0 0 1 33.28 0l411.818667 164.992c16.64 7.594667 28.757333 24.234667 28.757333 42.410667 0 18.176-10.581333 34.816-28.757333 42.410667l-410.282667 164.992a39.466667 39.466667 0 0 1-16.64 4.565333zM228.48 295.850667l289.152 116.565333 289.194667-116.565333L519.168 179.2 228.48 295.808z' fill='%23ffffff' p-id='4326'%3E%3C/path%3E%3Cpath d='M519.168 930.133333c-6.058667 0-12.117333-1.493333-16.64-2.986666L90.709333 762.026667c-16.64-7.552-28.757333-24.192-28.757333-42.368V295.765333c0-25.728 19.626667-45.397333 45.397333-45.397333 25.728 0 45.44 19.669333 45.44 45.397333v392.106667l366.378667 146.901333 366.378667-146.858666v-392.106667c0-25.770667 19.669333-45.44 45.397333-45.44 25.770667 0 45.44 19.669333 45.44 45.397333v423.936c0 18.176-10.581333 34.816-28.757333 42.368l-411.818667 165.034667c-6.058667 1.536-10.581333 3.029333-16.64 3.029333z' fill='%23ffffff' p-id='4327'%3E%3C/path%3E%3Cpath d='M519.168 930.133333a44.629333 44.629333 0 0 1-45.44-45.44V460.8c0-25.728 19.669333-45.44 45.44-45.44 25.728 0 45.397333 19.712 45.397333 45.44v423.893333c0 25.770667-21.205333 45.44-45.397333 45.44zM734.122667 422.954667c-6.058667 0-10.581333-1.536-16.64-3.029334L304.213333 254.890667c-22.698667-9.088-34.816-36.309333-25.728-59.050667 10.581333-22.698667 36.309333-34.816 59.050667-25.728l411.776 165.034667c22.741333 9.088 34.816 36.309333 25.770667 59.050666a42.24 42.24 0 0 1-40.917334 28.757334z' fill='%23ffffff' p-id='4328'%3E%3C/path%3E%3C/svg%3E\")"],
    ["--dark-mode-button-background", "url(\"data:image/svg+xml,%3Csvg t='1651383842398' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1950' width='200' height='200'%3E%3Cpath d='M752.41931153 240.7063601c8.36993432 0 15.62255883 3.08990502 21.72821045 9.16589356 6.1353147 6.08093262 9.18566918 13.3928833 9.18566918 21.73315382 0 8.55285621-3.05035376 15.85986352-9.18566918 21.94079614l-43.67394996 43.66900658c-5.93261719 5.97216773-13.17041016 8.95825195-21.72326709 8.95825195-8.87420678 0-16.20098901-2.98608422-22.08911085-8.75061035-5.88317847-5.87329102-8.80004906-13.2890625-8.80004906-22.14843774 0-8.54791283 2.95642114-15.75604272 8.91375732-21.72821044l43.66900659-43.67394996c6.14025879-6.07598853 13.44726539-9.16589356 21.98034668-9.16589356z m37.66223167 240.39459181h61.79809547c8.52813721 0 15.82031227 2.98608422 21.83697534 9.06207276C879.78271508 496.24395728 882.78857422 503.45208717 882.78857422 512c0 8.55285621-3.00585914 15.85986352-9.07196021 21.83697533-6.01666236 6.07598853-13.30883813 9.06207276-21.83697534 9.06207276h-61.79809547c-8.52813721 0-15.80053734-2.98608422-21.86663841-9.06207276-6.01666236-5.97711182-9.05712867-13.2890625-9.05712867-21.83697533 0-8.55285621 3.04046631-15.76098609 9.05712867-21.83697533 6.06610107-6.07598853 13.33850122-9.06207276 21.86663841-9.06207276zM512 141.21142578c8.52813721 0 15.79064917 3.08990502 21.85180688 9.06207276 6.02160645 6.08093262 9.05712867 13.3928833 9.05712867 21.83697533v61.79809546c0 8.55285621-3.03552222 15.85986352-9.0521853 21.83697534-6.06610107 6.07598853-13.32861305 9.16589356-21.85675025 9.16589355-8.53802467 0-15.80053734-3.08990502-21.86663842-9.16589355-6.01666236-5.97711182-9.0521853-13.2890625-9.05218458-21.83697534V172.11047387c0-8.44409203 3.03552222-15.76098609 9.05218458-21.83697533C496.20440674 144.3013308 503.46691871 141.21142578 512.00494408 141.21142578zM271.81304907 240.7063601c8.36499023 0 15.61267066 3.08990502 21.743042 9.16589356l43.66900659 43.67394996c6.14025879 6.07598853 9.17083764 13.38793922 9.17083764 21.72821044 0 8.55285621-3.01080323 15.86480689-9.05712938 21.83697534-6.03149391 6.08093262-13.30389404 9.06207276-21.85180617 9.06207275-8.69622827 0-16.02795386-2.98608422-21.95068359-8.85443115l-43.68383814-43.67395068c-5.97216773-5.97216773-8.92858886-13.28411842-8.92858886-22.03967284 0-8.55285621 3.00585914-15.76098609 9.07196021-21.83697462 6.01666236-5.97216773 13.30883813-9.06207276 21.85675096-9.06207276h-0.03955126z m436.93725586 436.91253615c8.36499023 0 15.60772729 2.98608422 21.72326709 9.16589355l43.67394995 43.67395067c6.1353147 6.17980933 9.18566918 13.38793922 9.18566919 21.93585205 0 8.34521461-3.05035376 15.65716529-9.18566919 21.73315382-6.1105957 6.17980933-13.35827613 9.16589356-21.72326636 9.16589356-8.52813721 0-15.84008789-2.98608422-21.98034668-9.16589356l-43.66900659-43.66900587c-5.95733618-5.87329102-8.91375732-13.1852417-8.91375732-21.73315453 0-8.55285621 3.01080323-15.86480689 9.05712866-21.94079614 6.03149391-6.07598853 13.32861305-9.16589356 21.85180689-9.16589355h-0.01977564zM512.00494408 388.40380836c-34.12243628 0-63.22192359 12.05310035-87.39239525 36.2532351-24.1358645 24.10125732-36.21368384 53.25018335-36.21368384 87.34295654 0 34.0927732 12.07782007 63.24169922 36.21368384 87.44677734C448.78796387 623.53814721 477.88250709 635.59619164 512 635.59619164c34.12243628 0 63.23181176-12.05310035 87.4072268-36.15435838C623.51837158 575.2466433 635.59619164 546.09771729 635.59619164 512c0-34.0927732-12.07782007-63.24169922-36.18896484-87.34295654C575.23181176 400.45690942 546.12243628 388.40380836 512 388.40380836zM172.12036133 481.10095191h61.79809547c8.53802467 0 15.80053734 2.98608422 21.86663841 9.06207276 6.01666236 6.08093262 9.05712867 13.2890625 9.05712867 21.83697533 0 8.55285621-3.04046631 15.85986352-9.05712867 21.83697533-6.06610107 6.07598853-13.32861305 9.06207276-21.86663841 9.06207276h-61.79809547c-8.52813721 0-15.81042481-2.98608422-21.83697534-9.06207276C144.21728492 527.85986352 141.21142578 520.54791283 141.21142578 512c0-8.55285621 3.00585914-15.76098609 9.07196021-21.83697533 6.03149391-6.07598853 13.30883813-9.06207276 21.83697534-9.06207276zM512.00494408 759.19238258c8.52813721 0 15.79064917 2.98608422 21.85180617 9.06207274 6.02160645 6.08093262 9.05712867 13.2890625 9.05712938 21.83697535v61.79809546c0 8.55285621-3.03552222 15.85986352-9.0521853 21.83697533C527.79559326 879.80249 520.53308129 882.78857422 512 882.78857422c-8.53802467 0-15.80053734-2.98608422-21.86663842-9.06207276-6.01666236-5.97711182-9.0521853-13.2890625-9.05218458-21.83697533v-61.79809546c0-8.55285621 3.03552222-15.76098609 9.05218458-21.83697534 6.06610107-6.07598853 13.32861305-9.06207276 21.86663842-9.06207275z m-196.47839379-81.57348633c8.5034182 0 15.80053734 2.98608422 21.84686279 9.16589355 6.03149391 6.08093262 9.07196021 13.3928833 9.07196021 21.94079614 0 8.44409203-3.08001685 15.65222192-9.19555664 21.72821044l-43.67394995 43.67394996c-6.10565162 6.17980933-13.34838867 9.16589356-21.72326637 9.16589356-8.54791283 0-15.84008789-2.98608422-21.85180687-8.96319533-6.07104516-6.07598853-9.0769043-13.38793922-9.0769043-21.93585205 0-8.65173364 2.95642114-15.96862769 8.92858887-21.94079614l43.68383813-43.66900658c6.10565162-6.17980933 13.44232202-9.16589356 21.95068359-9.16589355h0.03955054zM512 326.60571289c33.628052 0 64.6506958 8.34521461 93.0481565 24.81811547 28.42712378 16.69042992 50.92163109 39.1404419 67.4637456 67.56756568 16.57177758 28.32824708 24.86755347 59.32617188 24.86755347 93.00860596 0 33.68243408-8.27600098 64.68035888-24.86755347 93.10748267-16.58166504 28.32824708-39.08605981 50.77825904-67.4637456 67.4637456-28.36285424 16.58166504-59.37561059 24.82305884-93.0481565 24.82305884-33.66760254 0-64.67047143-8.24139381-93.05804468-24.81811547-28.37768578-16.69042992-50.86230492-39.14538598-67.46374487-67.46868897-16.58166504-28.42712378-24.86755347-59.42504859-24.86755348-93.10748267 0-33.68243408 8.31555152-64.68035888 24.86755348-93.00860596 16.55200195-28.42712378 39.03662109-50.87713647 67.46374487-67.56262231C447.35424828 334.94598413 478.371948 326.60571289 512 326.60571289z' p-id='1951' fill='%23ffffff'%3E%3C/path%3E%3C/svg%3E\")"],
];
const displayModeChangeButton = document.getElementsByClassName("display-mode-change-button")[0];
let currentDisplayMode = localStorage.getItem("currentDisplayMode");
currentDisplayMode = currentDisplayMode?currentDisplayMode:'light';
changeDisplayMode();

displayModeChangeButton.addEventListener("click", (e)=> {
    console.log(e);
    currentDisplayMode = currentDisplayMode==='light'?'dark':'light';
    changeDisplayMode();
    console.log(document.documentElement.style.getPropertyValue('--main-text-color'), currentDisplayMode);
    localStorage.setItem("currentDisplayMode", currentDisplayMode);
})


function changeDisplayMode(){
    if(currentDisplayMode === 'light'){
        for(let i=0;i<light.length;i++){
            let item = light[i];
            document.documentElement.style.setProperty(...item);
        }
    }else{
        for(let i=0;i<dark.length;i++){
            let item = dark[i];
            document.documentElement.style.setProperty(...item);
        }
    }
}
