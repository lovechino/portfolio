import React from 'react'
const data = [
  {
      year :"2024 -present",
      link :'midlane',
      company :'T1',
      description : "Á quân League of Legends Champions Korea Spring 2024 với tỉ số 2-3 trước GenG. Vô địch Esports World Cup 2024 – Liên Minh Huyền Thoại với tỉ số 3-1 trước Top Esports (TES)",
  },
  {
      year :'2023',
      link :'midlane',
      company : 'T1',
      description :'Á quân League of Legends Champions Korea Summer 2023 với tỉ số 0-3 trước GenG.Huy chương vàng ASIAD 2023 cùng ĐTQG Hàn Quốc với tỉ số 2-0 trước ĐT Đài Bắc Trung Hoa.Vô địch Giải vô địch thế giới Liên Minh Huyền Thoại 2023 với tỉ số 3 - 0 trước WBG.'
  },
  {
      year :'2022',
      link :'midlane',
      company :'T1',
      description :'Vô địch LCK 2022 Mùa Xuân với tỉ số 3-1 trước GEN.G.Á Quân Mid - Season Invitational 2022 với tỉ số 2-3 trước Royal Never Give Up (RNG).Á quân League of Legends Champions Korea Summer 2022 với tỉ số 0-3 trước GenG.Á quân Giải vô địch thế giới Liên Minh Huyền Thoại 2022 với tỉ số 2-3 trước DRX.Á quân League of Legends Champions Korea Spring 2023 với tỉ số 1-3 trước GenG.Hạng 3 Mid - Season Invitational 2022 với tỉ số 1-3 trước BLG.'
  },
  {
      year :'2021',
      link :'midlane',
      company :'T1',
      description :'Á quân League of Legends Champions Korea Summer 2021 với tỉ số 1-3 trước DWG KIA'
  },
  {
      year :'2020',
      link :'midlane',
      company :'T1',
      description :'Vô địch League of Legends Champions Korea Spring 2020 với tỉ số 3-0 trước GenG'
  },
  {
      year :'2019',
      link :'midlane',
      company :'SK Telecom T1',
      description :'Vô địch League of Legends Champions Korea 2019 với tỉ số 3-0 trước Griffin.Vô địch Rift Rivals 2019 (cùng DWG, GRF, KZ).Vô địch League of Legends Champions Korea Summer 2019 với tỉ số 3-1 trước Griffin'
  },
  {
      year :'2018',
      link :'midlane',
      company :'SK Telecom T1',
      description :'Á Quân ASIAD 2018 cùng ĐTQG Hàn Quốc với tỉ số 1-3 trước đội tuyển thể thao điện tử Trung Quốc'
  },
  {
      year :'2017',
      link :'midlane',
      company :'SK Telecom T1',
      description :'Vô địch League of Legends Champions Korea với tỉ số 3-0 trước KT.Vô địch Mid - Season Invitational Brazil 2017 với tỉ số 3-1 trước G2.Á quân League of Legends Champions Korea Summer 2017 với tỉ số 1-3 trước Longzhu Gaming.Á Quân 2017 Worlds Championship với tỉ số 0-3 trước Samsung Galaxy (SSG)'
  },
  {
      year :'2016',
      link :'midlane',
      company :'SK Telecom T1',
      description :'Vô địch IEM Katowice 2016 với tỉ số áp đảo 3-0 trước Fnatic khiến họ phải đầu hàng khi bị dẫn trước rất nhiều.Vô địch League of Legends Champions Korea Spring 2016 với tỉ số 3-1 trước ROX Tigers.Vô địch Mid-Season Invitational Shanghai 2016 với tỉ số 3-0 trước Counter Logic Gaming.Vô địch 2016 LoL World Championship (Giải vô địch thế giới Liên Minh Huyền Thoại 2016): Faker nhận được MVP của giải đấu'
  },
  {
      year : '2015',
      link : 'midlane',
      company : 'SK Telecom T1',
      description :'Vô địch League of Legends Champions Korea Spring 2015.Á Quân Mid - Season Invitational 2015 với tỉ số 2-3 trước EDward Gaming (EDG).Vô địch League of Legends Champions Korea Summer 2015.Vô địch 2015 LoL World Championship (Giải vô địch thế giới Liên Minh Huyền Thoại 2015)'
  },
  {
      year :'2014',
      link :'midlane',
      company :'SK Telecom T1',
      description :'Vô địch Siêu sao đại chiến (All - star) Paris 2014.Hạng nhì OGN Masters 2014'
  },
  {
      year :'2013',
      link :'midlane',
      company :'SK Telecom T1',
      description :'Vị trí thứ 3 OLYMPUS League Of Legends Spring 2013 (SK Telecom T1 #2).Vô địch Hot6ix League Of Legends Champions Summer 2013(SK Telecom T1).Vô địch Liên Minh Huyền Thoại: Giải vô địch thế giới mùa 3 (SK Telecom T1 K): Faker nhận được MVP của giải đấu.Vô địch OGN Champions Winter 2013.Vô địch Pandora.tv League of Legends Champions Winter 2013-2014 (SK Telecom T1 K)'
  }
]
const Project = () => {
  return (
    <div className=''>
      <div className=' my-20 text-center text-4xl'>Projects</div>
      <div>
        {
          data.map((item,index)=>(
            <div className=' mb-8 flex flex-wrap lg:justify-center'>
              <div className=' w-full lg:w-1/4'>
                <p className=' mb-2 text-sm text-neutral-900'>{item.year}</p>
              </div>
              <div className=' w-full max-w-xl lg:w-3/4'>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>
                  <span>{item.link}</span>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Project