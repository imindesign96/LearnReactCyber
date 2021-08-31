import React, { Component } from "react";

export default class BaiTapDoiMauXe extends Component {

    state = {
        imgProduct : require('../assets/products/steel-car.jpg').default
    }

    renderCar = (imgNewProduct) => {
        //Tao 1 state moi
       let newState = {
            imgProduct: imgNewProduct
        }
        this.setState(newState);
    }


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              style={{ width: "100%" }}
              src= {this.state.imgProduct}
              alt={`Baz taking a `}
            />
          </div>
          <div style={{width : "500px"}} classname="col-5">
            <div className="card text-primary">
            <div className="card-header">Extenrior Color</div>
              <div className="card-body ">
                <div className="row border border-link pt-2 pb-2 mb-1 " onClick= { () => {this.renderCar(require('../assets/products/black-car.jpg').default)}} style={{cursor:"pointer"}}>
                    <div className="col-2">
                        <img style={{width : "90px"}} src={require('../assets/icons/icon-black.jpg').default} alt={`Baz taking a `}/>
                    </div>
                    <div className="col-10">
                        <h4>Crytal Black</h4>
                        <p> black</p>
                    </div>
                </div>
                <div className="row border border-link pt-2 pb-2 mb-1" onClick= { () => {this.renderCar(require('../assets/products/red-car.jpg').default)}} style={{cursor:"pointer"}}>
                    <div className="col-2">
                        <img style={{width : "90px"}} src={require("../assets/icons/icon-red.jpg").default} alt={`Baz taking a}`}/>
                    </div>
                    <div className="col-10">
                    <h4>Crytal Black</h4>
                        <p> black</p>
                    </div>
                </div>
                <div className="row border border-link pt-2 pb-2 mb-1" onClick= { () => {this.renderCar(require('../assets/products/silver-car.jpg').default)}} style={{cursor:"pointer"}}>
                    <div className="col-2">
                        <img style={{width : "90px"}} src={require("../assets/icons/icon-silver.jpg").default} alt={`Baz taking a `}/>
                    </div>
                    <div className="col-10">
                    <h4>Crytal Black</h4>
                        <p> black</p>
                    </div>
                </div>
                <div className="row border border-link pt-2 pb-2 mb-1" onClick= { () => {this.renderCar(require('../assets/products/steel-car.jpg').default)}} style={{cursor:"pointer"}}>
                    <div className="col-2">
                        <img style={{width : "90px"}} src={require("../assets/icons//icon-steel.jpg").default} alt={`Baz taking a`}/>
                    </div>
                    <div className="col-10">
                    <h4>Crytal Black</h4>
                        <p> black</p>
                    </div>
                </div>
              </div>
              </div>
            </div>
            </div>
            </div>
        
      
    );
  }
}
