import React from 'react';

const VideoStreamView = () => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="list-group">
                                <a href="#demo" className="list-group-item list-group-item-action">Module 1</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 2</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 3</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 4</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 5</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 6</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 7</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 8</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 9</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 10</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 11</a>
                                <a href="#demo" className="list-group-item list-group-item-action">Module 12</a>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <iframe width="515" height="100%" src="https://www.youtube.com/embed/jX3aHRNAkPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default VideoStreamView;