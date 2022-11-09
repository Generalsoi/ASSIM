<div className="top-classes-content" key={content.id}>

              
              <div className="top-classes-content-img">{content.image}</div>



              <div className="top-classes-content-details">
                <div>
                  <PersonIcon className="personIcon" />
                  <p>{content.title}</p>
                </div>
                <p className="no-of-chapters">
                  {content.noOfChapters} Chapters
                </p>
              </div>
            </div>


             // document.querySelector(".top_class_video video ").play();
                      document.querySelector(".play_btn").style.display = "none";
                      document.querySelector(".video_text").style.display = "none";
                      document.querySelector(".top_class_video video ").controls = true;