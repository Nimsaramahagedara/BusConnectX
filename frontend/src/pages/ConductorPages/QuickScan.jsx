import { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import TopNavBar from "../../components/TopNavBar";
import './QuickScan.css';

const QuickScan = () => {
  const [result, setResult] = useState("");

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });
  useEffect(()=>{
    if(result){
        alert(result)
    }
    
  },[result])

  return (
    <div>
        <TopNavBar header={'Scan Ticket'}/>
        <div className="container d-flex align-items-center flex-column justify-content-center gap-5" style={{height:'100vh'}}>
            <div className="video-container position-relative">
            <video ref={ref} width={'50%'} className="rounded ratio"/>
            <div className="camera-target"></div>
        </div>
        <div className="status">
            {
                result && <>
                    <p className="text-success">Successfully Scanned</p>
                </>
            }
        </div>
        <div className="d-flex justify-content-around w-100 text-center">
            <div>
                <h6>From</h6>
                <p>Colombo</p>
            </div>
            <div>
                <h6>To</h6>
                <p>Matara</p>
            </div>
        </div>
        <div className="ticketContents d-flex just-content-around gap-4 text-center">
                <div>
                    <h6>Cost</h6>
                    <span>600</span>
                </div>

                <div>
                    <h6>No.of Tickets</h6>
                    <span>3</span>
                </div>

                <div>
                    <h6>Discount</h6>
                    <span>10%</span>
                </div>

                <div>
                    <h6>Total</h6>
                    <span>1620</span>
                </div>
            </div>
        </div>
    </div>
    
  );
};
export default QuickScan;