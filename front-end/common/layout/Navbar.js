import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import messages from 'containers/HomePage/messages';
import ShortLogoSvg from 'assets/images/logo/hydra_logo_h.jpg';
import LocaleToggle from 'containers/LocaleToggle';


function Navbar() {
  return (
   
      <Header className="ant-layout-header layout-page-header" style={{ height: '90px' }}>
		<div className="container">
	   <Row>
		  <Col span={12}><div className="logo" style={{ width: 180 }}> 
		  <img src={ShortLogoSvg} alt="short-logo" />
		  </div></Col>
		  <Col span={12}><div align="right" className="">
           <NavLink to="/login" className=" btn-login btn-primary" >
          Login
        </NavLink> 
		  </div></Col>
		</Row>
          </div>
		  
       
      </Header>
  
  );
}

export default Navbar;
