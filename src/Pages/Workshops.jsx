import React from 'react';
import WorkshopCard from '../Components/Workshopcard';
const Workshops = () => {
    return (
        <div class="container-md px-5 py-4">
            <div class="row ">
                <div class="col d-flex justify-content-center align-items-center ">
                    <h2 class="primary-text-color font-weight-bold">Upcomming Sessions!</h2>
                </div>
            </div>
            <div class="row mt-3">
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
                <WorkshopCard />
            </div>

        </div>

    );
};

export default Workshops;
