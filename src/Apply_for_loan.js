import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero_title from './Hero_title'

function Apply_for_loan() {
  return (
    <div>
          <div className='hero-overlay'>
    <Header/>
        <Hero_title hero='Apply Now'/>
    </div>
    <div className='details_form'>
        <form>
          <div className='row'>
            <div className='col-12 col-md-6'>
            <label>*LOAN AMOUNT($)</label><br/>
            <input placeholder='Enter Amount'/>
            </div>
            <div className='col-12 col-md-6'>
                <label>*PURPOSE OF LOAN</label><br/>
                <select>
                    <option>category1</option>
                    <option>category1</option>
                    <option>category1</option>
                </select>
            </div>
          </div>
        <div className='gender_selection'>
        <label>*SELECT GENDER </label>
          <input type='radio' name='gender'/><label>MALE</label>
          <input type='radio' name='gender'/><label>FEMALE</label>
        </div>
        <div className='row'>
            <div className='col-12 col-md-6'>
                <label>*FIRST NAME</label><br/>
                <input placeholder='First Name'/>
               
            </div>
            <div className='col-12 col-md-6'> 
                <label>*LAST NAME</label><br/>
            <input placeholder='Last Name'/></div>
        </div>
        <label>*NUMBER OF DEPENDANTS</label><br/>
        <select>
            <option>category1</option>
            <option>category1</option>
            <option>category1</option>
        </select>
        <div className='row'>
            <div className='col-12 col-md-6'>
                <label>*EMIAL ADDERESS</label><br/>
                <input placeholder='Email'/>
            </div>
            <div className='col-12 col-md-6'>
                <label>*PHONE NUMBER</label><br/>
                <input placeholder='Number'/>
            </div>
        </div>
        <label>MARITAL STATUS</label><br/>
        <select>
            <option>category1</option>
            <option>category1</option>
            <option>category1</option>
        </select>
        <div className='row'>
            <div className='col-12 col-md-6'>
                <label>*FIRST NAME</label><br/>
                <input placeholder='Enter name'/>
            </div>
            <div className='col-12 col-md-6'>
                <label>*TOWN/CITY</label><br/>
                <input placeholder='Enter city'/>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 col-md-6'>
                <label>*STREET</label><br/>
                <input placeholder='Enter Street Address'/>
            </div>
            <div className='col-12 col-md-6'>
                <label>*HOUSE NAME/NUMBER</label><br/>
                <input placeholder='Enter House Name'/>
            </div>
        </div>
        <label>*HOMEOWNER STATUS</label><br/>
        <select>
            <option>category1</option>
            <option>category1</option>
            <option>category1</option>
        </select>
        <div className='row'>
            <div className='col-12 col-md-6'>
                <label>*EMPLOYMENT INDUSTRY</label><br/>
                <input placeholder='Enter INDUSTRY'/>
            </div>
            <div className='col-12 col-md-6'>
                <label>*EMPLOYER NAME</label><br/>
                <input placeholder='Enter name'/>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 col-md-6'>
                <label>*WORK PHONE NUMBER</label><br/>
                <input placeholder='Phone Number'/>
            </div>
            <div className='col-12 col-md-6'>
                <label>*MONTHLY INCOME($)</label><br/>
                <input placeholder='Enter INCOME'/>
            </div>
        </div>
        <button>SUBMIT</button>
        </form>
    </div>
<Footer/>
    </div>
    
  )
}

export default Apply_for_loan