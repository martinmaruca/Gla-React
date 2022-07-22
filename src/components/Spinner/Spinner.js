import "./Spinner.css";

const spinner = () => {
    return (  
      <> 
        <div class="d-flex justify-content-center align-items-center m-5">
            <div class="spinner-border text-warning" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
      </> 
    );
}
 
export default spinner;

