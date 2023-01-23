// Columns component
import Button from "./Button";

const Columns = () => {
    return (
        <div className="w-full mx-auto mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className=" mx-auto">
                    <Button color="blue">
                        Button one
                    </Button>
                </div>
                <div className=" mx-auto">
                    <Button color="cyan">
                        Button two
                    </Button>
                </div>
                <div className=" mx-auto">
                    <Button color="red">
                        Button three
                    </Button>
                </div>
                <div className=" mx-auto">
                    <Button color="green">
                        Button four
                    </Button>
                </div>
                <div className=" mx-auto">
                    <Button color="orange">
                        Button five
                    </Button>
                </div>
                <div className=" mx-auto">
                    <Button color="purple">
                        Button six
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Columns;