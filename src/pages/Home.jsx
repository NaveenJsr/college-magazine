import React from 'react'
import Card from './PageCompo/Card'


function Home() {

  return (
    <div className='page-style'>
      <div className='home_container'>
        <div className='Card-heading'>
          <h3>News</h3>
        </div>
        <div className='home_row'>
          <Card 
            image="https://youthincmag.com/wp-content/uploads/2019/08/CNBC-TV.jpg"
            title='75th or 76th Independence Day?'
            provider='CGU Times'
            date='Aug 15, 2022 09:35 AM IST'
            body='India is celebrating its 76th Independence Day today, but arguments that August 15, 1948, was the first anniversary of the country’s freedom have created much confusion.'

          />
          <Card
            image="https://assets.bbhub.io/company/sites/51/2019/07/333161661_1-9.jpg"
            title='Closing bell: Sensex tanks over 600 pts to end day at 59,646; Nifty below 17,800'
            provider='CGU Times'
            date='Aug 15, 2022 09:35 AM IST'
            body='Closing bell: Sensex tanks over 600 points to end day at 59,646; Nifty below 17,800'
            
          />

          <Card 
            image="https://img.jagranjosh.com/images/2022/July/2172022/Compress_draupadi_murmu.jpg"
            title='Draupadi Murmu’s Bhubaneswar connection - From Unit II Girl’s High School to Rama Devi College'
            provider='CGU Times'
            date='Aug 15, 2022 09:35 AM IST'
            body='A resident of tribal-dominated Uparbeda village under Kusumi Tehsil of Mayurbhanj district, Murmu passed her matriculation from the Unit II Girl’s High School in 1974. She studied there for three years (Class 8, 9 & 10) before joining Rama Devi Women’s college for her higher studies.'
          />
          
        </div>

        <div className='Card-heading'>
          <h3>Trending</h3>
        </div>
        <div className='home_row'>
          <Card 
            image="https://img.jagranjosh.com/images/2022/July/2172022/Compress_draupadi_murmu.jpg"
            title='Draupadi Murmu’s Bhubaneswar connection - From Unit II Girl’s High School to Rama Devi College'
            provider='CGU Times'
            date='Aug 15, 2022 09:35 AM IST'
            body='A resident of tribal-dominated Uparbeda village under Kusumi Tehsil of Mayurbhanj district, Murmu passed her matriculation from the Unit II Girl’s High School in 1974. She studied there for three years (Class 8, 9 & 10) before joining Rama Devi Women’s college for her higher studies.'
          />
          <Card
            image="https://assets.bbhub.io/company/sites/51/2019/07/333161661_1-9.jpg"
            title='Closing bell: Sensex tanks over 600 pts to end day at 59,646; Nifty below 17,800'
            provider='CGU Times'
            date='Aug 15, 2022 09:35 AM IST'
            body='Closing bell: Sensex tanks over 600 points to end day at 59,646; Nifty below 17,800'
            
          />
          <Card
            image="https://images.hindustantimes.com/img/2022/08/19/1600x900/cd2f2c52-0757-11ed-8045-0e66fdd513ce_1658231338127_1660903543045_1660903543045.jpg"
            title='Gandhi statue outside Hindu temple vandalised in New York'
            provider='CGU Times'
            date='Aug 15, 2022 09:35 AM IST'
            body='India is celebrating its 76th Independence Day today, but arguments that August 15, 1948, was the first anniversary of the country’s freedom have created much confusion.'
            
          />
        </div>

        <div className='Card-heading'>
          <h3>Sports</h3>
        </div>
        <div className='home_row'>
          <Card 
            image="https://youthincmag.com/wp-content/uploads/2019/08/CNBC-TV.jpg"
            title='75th or 76th Independence Day?'
            provider='CGU Times'
            date='Aug 15, 2022 09:35 AM IST'
            body='India is celebrating its 76th Independence Day today, but arguments that August 15, 1948, was the first anniversary of the country’s freedom have created much confusion.'

          />
          <Card
            image="https://assets.bbhub.io/company/sites/51/2019/07/333161661_1-9.jpg"
            title='Closing bell: Sensex tanks over 600 pts to end day at 59,646; Nifty below 17,800'
            provider='CGU Times'
            date='Aug 15, 2022 09:35 AM IST'
            body='Closing bell: Sensex tanks over 600 points to end day at 59,646; Nifty below 17,800'
            
          />
          <Card
            image="https://images.hindustantimes.com/img/2022/08/19/1600x900/cd2f2c52-0757-11ed-8045-0e66fdd513ce_1658231338127_1660903543045_1660903543045.jpg"
            title='Gandhi statue outside Hindu temple vandalised in New York'
            provider='CGU Times'
            date='Aug 15, 2022 09:35 AM IST'
            body='India is celebrating its 76th Independence Day today, but arguments that August 15, 1948, was the first anniversary of the country’s freedom have created much confusion.'
            
          />
        </div>

      </div>

    </div>
  )
}

export default Home