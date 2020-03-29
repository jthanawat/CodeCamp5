import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      pictureList: [
        'https://mpics.mgronline.com/pics/Images/562000009111301.JPEG',
        'https://s359.kapook.com/rq/580/435/50/pagebuilder/64132db2-79cd-4885-ace1-143e3dbee87d.jpg',
        'https://buzzebees.blob.core.windows.net/backofficehtmleditor/20180205-152543-_ac40ca25-c093-4437-a8e3-bcbb9d308691.jpg',
        'https://mpics.mgronline.com/pics/Images/559000006939201.JPEG',
        'https://www.goddesszilla.com/wp-content/uploads/2017/07/CXDKBVRUwAAApp7.jpg'
      ],
    }
  }

  changeIndex = newIndex => {
    const picListLength = this.state.pictureList.length

    if (newIndex < 0 || newIndex >= picListLength) return;
    this.setState({
      index: newIndex
    })
  }

  render() {
    const idx = this.state.index;
    const picList = this.state.pictureList;
    const prevIdx = idx - 1;
    const nextIdx = idx + 1;

    return (
      <div class="container">
        <div class="row App">

          <div onClick={() => this.changeIndex(prevIdx)} class="col-1 App btn btn-success prev">
            Previous
          </div>

          <div class="col-10 App carousel-inner">
            <img src={picList[idx]} ></img>
          </div>

          <div onClick={() => this.changeIndex(nextIdx)} class="col-1 App btn btn-success next">
            Next
          </div>

        </div>
      </div>
    );
  }
}

export default App;