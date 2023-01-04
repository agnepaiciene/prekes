function Product(props){
    const title=props.products.title;
    const price=props.products.price;
    const description=props.products.description;


    return (
        <div class="col-md-4">
            <div class="card text-white mt-3 p-1">
               <div class="card-header bg-info fw-bold fs-4 p-4">{title}
               <hr></hr>
                    <div  class="card-body bg-primary bg-opacity-75 d-flex justify-content-center pt-5">
                         <p class="pt-3">nuo <span class="fw-bold p-1 fs-1">{price}</span>Eur mėn.</p>
                            {description}
               
                    </div>
                </div>
            </div>
        </div>
    );
}
export default  Product