const Updates = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-center">Updates</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <div className="bg-white p-4 shadow-lg">
                    <h2 className="text-2xl font-bold">Update 1</h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, felis nec tristique luctus, nunc nisl ultricies lorem, vel fermentum velit nisi a purus.</p>
                </div>
                <div className="bg-white p-4 shadow-lg">
                    <h2 className="text-2xl font-bold">Update 2</h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, felis nec tristique luctus, nunc nisl ultricies lorem, vel fermentum velit nisi a purus.</p>
                </div>
                <div className="bg-white p-4 shadow-lg">
                    <h2 className="text-2xl font-bold">Update 3</h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, felis nec tristique luctus, nunc nisl ultricies lorem, vel fermentum velit nisi a purus.</p>
                </div>
            </div>
        </div>
    );
}

export default Updates;