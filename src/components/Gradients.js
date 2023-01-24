// Gradients component
const Gradients = () => {
    return (
        <div className="space-y-2 mt-20">
            <div class="h-14 bg-gradient-to-r from-cyan to-blue rounded-md"></div>
            <div class="h-14 bg-gradient-to-r from-orange to-purple rounded-md"></div>
            <div class="h-14 bg-gradient-to-r from-green to-red rounded-md"></div>
            <div class="h-14 bg-gradient-to-r from-purple to-light-blue rounded-md"></div>
            {/* Arbitrary value */}
            <div className="h-14 w-[500px] bg-red rounded-md"></div>
        </div>
    )
}

export default Gradients;