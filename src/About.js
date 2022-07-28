import React, {useState, useCallback} from 'react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Button, Page, setOptions, getJson, themes } from '@mobiscroll/react';


    
setOptions({
  theme:'ios',
  themeVariant: 'light'
})

const About=()=> {
  const min = '2022-07-23T00:00';
const max = '2023-01-23T00:00';
const [singleLabels, setSingleLabels] = useState([]);
const [singleInvalid, setSingleInvalid] = useState([]);
  const onPageLoadingSingle = useCallback((event) => {
    getPrices(event.firstDay, (bookings) => {
        setSingleLabels(bookings.labels);
        setSingleInvalid(bookings.invalid);
        	
    });
}, []);

const getPrices = (d, callback) => {
  const invalid = [];
  const labels = [];

  getJson('//trial.mobiscroll.com/getprices/?year=' + d.getFullYear() + '&month=' + d.getMonth(), (bookings) => {
      for (const booking of bookings) {
          const d = new Date(booking.d);

          if (booking.price > 0) {
              labels.push({
                  start: d,
                  title:  booking.price,
                  textColor: '#b97fb8'
              });
            } else {
              invalid.push(d);
          }
      }
      callback({ labels, invalid });
  }, 'jsonp');
}
    const [openPicker, setOpenPicker] = useState(false);
    const [date, setDate] = useState(new Date());
    
    const show = () => {
        setOpenPicker(true);
    };
    
    const onClose = () => {
        setOpenPicker(false);
    };
    
    const inputProps = {
        className: 'md-mobile-picker-input',
        placeholder: 'Please Select...'
    };
    
    const boxInputProps = {
        className: 'md-mobile-picker-box-label',
        inputStyle: 'box',
        placeholder: 'Please Select...'
    };
    
    return (
      <>
        <Page>
            <div className="mbsc-grid">
                
                
                <div className="mbsc-form-group">
                    <div className="mbsc-row">
                        <div className="mbsc-col-12">
                           
                            <Datepicker  controls={['calendar','timegrid']} inputProps={boxInputProps} />
                        </div>
                    </div>
                </div>
                <div className="mbsc-txt-muted md-mobile-picker-header text-center">select an available slot</div>
            </div>
            <div className="md-mobile-picker-inline date">
                <Datepicker display="inline" controls={['calendar']}  min={min}
    max={max}
    labels={singleLabels}
    invalid={singleInvalid}
    onPageLoading={onPageLoadingSingle} />
            </div>
        </Page>
        </>
    ); 
}
      

export default About