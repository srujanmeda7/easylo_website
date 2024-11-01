import React from 'react'
import Header from './Header'
import Hero_apply_loan from './Hero_apply_loan'
import Footer from './Footer'

function Apply_for_loan() {
  return (
    <div>
          <div className='hero-overlay'>
    <Header/>
        <Hero_apply_loan/>
    </div>
    <div className='details_form'>
        <form>
          <div className='row'>
            <div className='col'>
            <label>*LOAN AMOUNT($)</label><br/>
            <input placeholder='Enter Amount'/>
            </div>
            <div className='col'>
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
            <div className='col'>
                <label>*FIRST NAME</label><br/>
                <input placeholder='First Name'/>
               
            </div>
            <div className='col'> 
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
            <div className='col'>
                <label>*EMIAL ADDERESS</label><br/>
                <input placeholder='Email'/>
            </div>
            <div className='col'>
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
            <div className='col'>
                <label>*FIRST NAME</label><br/>
                <input placeholder='Enter name'/>
            </div>
            <div className='col'>
                <label>*TOWN/CITY</label><br/>
                <input placeholder='Enter city'/>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <label>*STREET</label><br/>
                <input placeholder='Enter Street Address'/>
            </div>
            <div className='col'>
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
            <div className='col'>
                <label>*EMPLOYMENT INDUSTRY</label><br/>
                <input placeholder='Enter INDUSTRY'/>
            </div>
            <div className='col'>
                <label>*EMPLOYER NAME</label><br/>
                <input placeholder='Enter name'/>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <label>*WORK PHONE NUMBER</label><br/>
                <input placeholder='Phone Number'/>
            </div>
            <div className='col'>
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