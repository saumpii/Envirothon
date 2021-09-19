import React from "react";
import { Container,Row } from "reactstrap";

export default function Padlet(){
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <Container>
            <h3> Hightlight Events or Augmented Video Locations </h3>
            <div className="padlet-embed" style={{border: '1px solid rgba(0,0,0,0.1)', borderRadius: '2px', boxSizing: 'border-box', overflow: 'hidden', position: 'relative', width: '100%', background: '#F4F4F4'}}><p style={{padding: 0, margin: 0}}><iframe src="https://padlet.com/embed/dvmkmpe7k7nz4hlx" frameBorder={0} allow="camera;microphone;geolocation" style={{width: '100%', height: '608px', display: 'block', padding: 0, margin: 0}} /></p><div style={{padding: '8px', textAlign: 'right', margin: 0}}><a href="https://padlet.com?ref=embed" style={{padding: 0, margin: 0, border: 'none', display: 'block', lineHeight: 1, height: '16px'}} target="_blank"><img src="https://padlet.net/embeds/made_with_padlet.png" width={86} height={16} style={{padding: 0, margin: 0, background: 'none', border: 'none', display: 'inline', boxShadow: 'none'}} alt="Made with Padlet" /></a></div></div>
        </Container>
        <Container>
            <Row>

             </Row> 
         </Container>
         <br/>
         <br/>
         <br/>
         
        <Container>
        <h3> Notes or Agendas </h3>
        <div className="padlet-embed" style={{border: '1px solid rgba(0,0,0,0.1)', borderRadius: '2px', boxSizing: 'border-box', overflow: 'hidden', position: 'relative', width: '100%', background: '#F4F4F4'}}><p style={{padding: 0, margin: 0}}><iframe src="https://padlet.com/embed/xypnjxl3t5111flo" frameBorder={0} allow="camera;microphone;geolocation" style={{width: '100%', height: '608px', display: 'block', padding: 0, margin: 0}} /></p><div style={{padding: '8px', textAlign: 'right', margin: 0}}><a href="https://padlet.com?ref=embed" style={{padding: 0, margin: 0, border: 'none', display: 'block', lineHeight: 1, height: '16px'}} target="_blank"><img src="https://padlet.net/embeds/made_with_padlet.png" width={86} height={16} style={{padding: 0, margin: 0, background: 'none', border: 'none', display: 'inline', boxShadow: 'none'}} alt="Made with Padlet" /></a></div></div>
        </Container>
        </div>
    )
}