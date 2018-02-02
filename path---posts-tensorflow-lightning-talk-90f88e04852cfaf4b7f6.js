webpackJsonp([6042386028166],{377:function(a,e){a.exports={data:{site:{siteMetadata:{title:"Blog by Robin Cottiss",subtitle:"I am an Enterprise Architect in the Customer Consulting organization at Tableau.",copyright:"© All rights reserved.",author:{name:"Robin Cottiss",twitter:"@geordielad"}}},markdownRemark:{id:"C:/Users/rcottiss/OneDrive - Tableau Software Inc/lumen-blog/src/pages/articles/2018-01-31---Tensorflow-Lightning-Talk/index.md absPath of file >>> MarkdownRemark",html:'<h2>Introduction</h2>\n<p>This is a quick introduction to TensorFlow. It was Created for a Lightning Talk given to a Deep Learning Study Group. We are all taking the <a href="https://www.coursera.org/specializations/deep-learning">Coursera Specialization on Deep Learning</a></p>\n<p>Soon after starting the Coursera DL Course I was also finding references to TensorFlow and started watching some <a href="https://www.youtube.com/playlist?list=PLOU2XLYxmsIKGc_NBoIhTn2Qhraji53cv">YouTube videos</a> talking about Tensorflow. At the time I was unaware that the course would use TensorFlow.</p>\n<h2>Deep Learning Frameworks</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/DL_libraries_rank.jpg-768x981-b593883aa70dd7536a6cf97cac884281-3bef9.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 768px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 127.734375%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsSAAALEgHS3X78AAAEQklEQVRIx2WVWU9bVxSF+Wt9bmnmRuqQhJYOKmpe8xaa0EZtmgTalD41Un9B81IpDwQDHvCAjcHGZjKewfNsQIy759twLkSJdMWVde7a317r7J2BrXRG8oXixZPPS7FYlEKhoA/vPPb3nZ0dWV9fl1QqJaVSSf+ura1JNpuVk5MTGdjaSEq3XRf7r1Ta0YPdblcP9ft9OTg40A/57fj4WKLRqITDYTk9PZXNzU3xeDyyvb2t3w9M/huWf97E5O//YjL5OiqpXFn6va40Gg3JZDLSbDal1+spba1Wk06no79vbW1Ju92WcrmsxJxXwetj0/L50zkZHJ2SDx68EX8sI3v9jqEsy+LiolSrVRVZWlpSiv39faWCmHcEIW61Wko88NW4Vz55MiMf//hWbvw8K/5lU7lZNxWbEovFtDKC8Xhcrdjd3VXPksmkvuMpgpxTwaEXHrn9ZFYFrz52SWglK3u9jjRNxeXlZa28t7cnq6urSnh0dKR0tIm3lUpF6fFXBe8998iXhnLwXNAXTRnCmqlcUsF6va7VoSVpqBBLJBIaGEUIyCG8+8wIvvA6hMF4Vj2s1eoqSGVCQZD2Dg8PNRDahpCCnMMWDeXuM7dAOTj6Vq6NzYh3cUNajaqpfOEND21BiDhiKysrWoyWeecGOB6S8kcmZQjDqwU52O9L1RzgQ9rioU0St4S5XE7f+e0dwju/ueXGTy5tGUJP5IwQD6GyhKTMpFhCUuYdDylGeDopn/46J1cfTZ95aAQDsbT02k1NmXuIGEEQAtcGKlImdTyEEEG60JZp9/qY6zyUGZPyppS3C+bCVmRhYUE9Ylrw87KHFLCEnHM8/OZ3n5D0hw+n5Mojl0SMh922abN5drHxhuoYf9lDRK2HnGMM1cMhc2W+NqI3jY83zaTgYamYl7Iho2XahDASieiygIp2ISRlfIUeYSflH/4K6DM8MS+hRE5DabXazoxaD/mISWE5pNNpJaRV24lDODLpF2b625d+8S9tyk4xJyUz9KFQSC8zweATrVpCRCDEVztRSjg84ZPvXs7r6F05n5RmvWIO95wQIMRDxNmH1kNo3yOEjJSZFFL2RNZlu5A17dW0TUvIvNIqVBDyIMKexF/W2LmHXp2Ua4+nzQWfkXAyryl3Ol2lsB5CSFv4hjABWUI7hkrIpqFlfBwa98nswpoUcxklpBVStoSIXCbkHULCc+7hHbMcvv/TLyPmYcEGzMZu1MrqIYRcGZsywpZwY2PDSfmdWWbTcA+HzF8EXcGEFPMZcw+r2gqTQqv4ZD1kjm0QEAaDwQsPhye88oVZEHh4y2zuYDyjC7bb6zuEbGwI+YiUuYM25ff24S1Dde+5Vz576pbbv7hlat5slVxaCZkUZvXyPbSEFLCEgUBAvVbCh6/mZPSVW0bGp+T+H9PiiyQkn83o/3o2FCYEcVomdQQtPQVZbbbl/wFuZhhyl85qEwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="DL libraries rank jpg 768x981"\n        title=""\n        src="/static/DL_libraries_rank.jpg-768x981-b593883aa70dd7536a6cf97cac884281-3bef9.png"\n        srcset="/static/DL_libraries_rank.jpg-768x981-b593883aa70dd7536a6cf97cac884281-4f55c.png 240w,\n/static/DL_libraries_rank.jpg-768x981-b593883aa70dd7536a6cf97cac884281-7c32b.png 480w,\n/static/DL_libraries_rank.jpg-768x981-b593883aa70dd7536a6cf97cac884281-3bef9.png 768w"\n        sizes="(max-width: 768px) 100vw, 768px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The table above was taken from this article: <a href="https://blog.thedataincubator.com/2017/10/ranking-popular-deep-learning-libraries-for-data-science/">Ranking Popular Deep Learning Libraries for Data Science</a> had TensoFlow way out in the lead:</p>\n<p><a href="https://keras.io/">Keras</a> was 2nd. Keras is not really a competing framework but a higher level library that can integrate with TF. Last year the author of Keras Francois Chollet <a href="http://www.fast.ai/2017/01/03/keras/">announced</a> that Keras would be added to TF </p>\n<h2>TensorFlow in 5 minutes</h2>\n<h3>Execution Model</h3>\n<p><a href="https://www.oreilly.com/learning/hello-tensorflow">This O’Reilly Article</a> explains the TC execution model. It’s a delayed execution model. In TF you define a graph then run it.</p>\n<p>Delayed Execution has it’s detractors and maybe Google is listening because there are efforts to support <a href="https://research.googleblog.com/2017/10/eager-execution-imperative-define-by.html">eager execution in TF</a>.</p>\n<p>I do not consider myself an advanced programmer but I don’t find the Delayed Execution model that daunting. But perhaps thats because I use Tableau!</p>\n<h2>Why Tensorflow?</h2>\n<p>What makes TensorFlow so popular? I don’t know! I have not even looked at any of the other Libraries but I suspect the depth and breadth, performance, and community have a lot to do with it. I get the impression TensorFlow is <em>democratising</em> Deep Learning.</p>\n<p>BTW <a href="https://aws.amazon.com/mxnet/">AWS adopted MXNet</a> and proposed it as an <a href="https://mxnet.apache.org/">Apache Incubator project</a>). Microsoft seems to be using <a href="https://github.com/Microsoft/CNTK">CNTK or Cognative Toolkit</a></p>\n<h2>Tensorboard</h2>\n<p><a href="https://www.tensorflow.org/programmers_guide/summaries_and_tensorboard">TensorBoard</a> provides a way to vizualize Deep Learning. <a href="https://youtu.be/eBbEDRsCmv4">Here</a> is a YouTube Introduction.</p>\n<p>As a Tabloid you might be interested in seeing how data vizualization can be applied to help understand complicated processes.</p>\n<h2>Installing TensorFlow in a Windows Lab PC with a GPU</h2>\n<h3>PC</h3>\n<p>My Home Lab server not state of the art. It is a 2013 Intel i7 six core with 64GB of memory running Windows 2012. It did not have a great graphics card.</p>\n<h3>Which GPU to Buy a GPU</h3>\n<p>GPUs can be expensive. All the Bitminers are buying them up so the prices are inflated. But for learning Tensorflow a budget GPU can provide significant improvement over a CPU only setup even a six core.</p>\n<p>This <a href="http://timdettmers.com/2017/04/09/which-gpu-for-deep-learning/">blog post</a> by Tim Dettmers has a good overview of the available GPUs as of April 2017 and his experiences with some configurations. </p>\n<p>I bought an EVGA 1050 Ti from <a href="https://www.amazon.com/EVGA-GeForce-Support-Graphics-04G-P4-6253-KR/dp/B01MF7EQJZ">Amazon</a></p>\n<p>The 1050Ti is a Pascal based GPU.</p>\n<p>NVidia is best for Tensorflow because\nIt cost me $160 new in November 2017. When I checked on January 31st it is selling used for $181</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/amazon-gtx1050-page-cda8feab2474c01face0ede5d2956037-60bc9.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 44.713930348258714%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABh0lEQVQoz1WRvU7DMBSF81ZIICZGFhBCDAwIwQpvgBADKoi/UqlUqAjG8h5pKQsDbCwFIRq31IkdO45jp7ScuJWAE9u6sf3Z5157OrOUhpTSAXoYxXGss8wYY63NIVt8iKz7/9es9Xrd92QipXVmRk7D3EqpBhRncSlF7MQ5/w04F0J40aAXhtFlpdpstTudt1ar7bf88XiskqhPOl8hl0rjXJma4XehoRM8YfS63SAIyO7O1lW1dN+on50e1GpVwFqrr7APOFEpkjAmz41Gn8Bwhz1eIvRrt3lY2rmrV06O9xcX528bJSwg8ZCGcMyiSAiplWDkQ3FqMiRnpvDnR+9t8LixuVQp10rHJ7PzM0flPSzgNkJ6ASEkIIwxKSXKgiIZJwQF7C7JfL/52H64rt9sbG7Pzi34zQfMU55woVKdIUcH5KM/msKTCLUoX5yvriyvry2/PD9hJuaCcYaGAisIr1oUCu+E2hV8ATvyGyNjkUo4TivsJBmPFEyBStPUUVPBAmDs+QGmGuMVgJtxBAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="amazon gtx1050 page"\n        title=""\n        src="/static/amazon-gtx1050-page-cda8feab2474c01face0ede5d2956037-c83f1.png"\n        srcset="/static/amazon-gtx1050-page-cda8feab2474c01face0ede5d2956037-569e3.png 240w,\n/static/amazon-gtx1050-page-cda8feab2474c01face0ede5d2956037-93400.png 480w,\n/static/amazon-gtx1050-page-cda8feab2474c01face0ede5d2956037-c83f1.png 960w,\n/static/amazon-gtx1050-page-cda8feab2474c01face0ede5d2956037-23e13.png 1440w,\n/static/amazon-gtx1050-page-cda8feab2474c01face0ede5d2956037-60bc9.png 1608w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>[Show screenshot of CPU training v GPU training]</p>\n<h3>Installing Tensorflow and Prequisite Software</h3>\n<p>I followed the <a href="https://www.tensorflow.org/install/install_windows">instructions</a> from the Tensorflow site.</p>\n<p>After installing your GPU Card:</p>\n<ul>\n<li>Python Anaconda</li>\n<li>NVidia CUDA</li>\n<li>NVidia Drivers</li>\n<li>cuDNN </li>\n<li>TensorFlow</li>\n</ul>\n<h3>Comparing CPU v GPU</h3>\n<p>Here is the cifar10_train.py running on my GPU:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/-cifar10-train-gpu-task-manager-6101f39db197e3b4c78dfa18f2dbae05-23e13.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACzklEQVQoz01QTW8TVxSdJR+FBjtmbDcICdQdUtf9Bd1VqVQETVn2L/QPsOimCwSIolbgpKGyQK1QIAZNAsQOEgoJGBwnTcYwTuxkbM94Pt7nvHnz5eERseDq6upI751z7zlSQ9XW37fXW9qmtvtW1Zpae1Nrb7Tbjda7V1vvV1r7dU1fe6e/UPVVtbvRMZ6ua9WtrvjZ2ulI1aXFh4vPHj95pixVlaWaUq0tVJcXa8+V5Rdv6ytktYRWZ+zan/rCNV25Ap7ftF6W+rUbcLAbhrF0YfI7uXhKzheyudzJfP742InMeE7O5w8dz/x++dfg30vO7Hn4z0V450c4+wOY+R6Vp6zpSbvTjNJU+unnS18Vi6JlWS4UCplMJpfL5WVZkqTrV6+maRqFcRKno1GaJGkcp+koRdgzbScMQ+nC1FSxWJiYmJDlk8VCIZvN5sazp8+c/Xbql9/+U+ogXNbdp+3Bgrr3ZMdY6ljVfbDQUJuv68z3P5Kz4+OivxwbEycf/eLY4SNHvj73Tb1raIa1uddv7updgHvI6zqo6+IuIHsO2jEdRKh0/cYf5bv35h7O3597MF95NFd5PF+eVSqVtm4g20rCAEFIKAuCyPMYFc2YACZmEBNpaBhRJMx/Vtzzo7hnu67tJEmMebIPfB2wHuI9yPchN0moQ4YIkbBjOa4LRSFECbEJh4Rh5vdsBwIQxwn0uIH8IQ76gBmQGYjZNOyjg82+77ODopQKTD3Po5Tw0MKUM5aMRoQQhBAAQADxyDkXxzkeB4JsDoeDwcAwDMuyhITv85D7lPk4+ORFWBR6QRCIKdQJwgfkAIjAgGUKWYKgmBRjihGFjuW6e44wgl3CHOSJYHkYMR4wzkVgPIqGmELXlW6taffXtx+8apQXFeX/neVds7LVKa1ulVeaj9R+aUOfbg3/bg2nt80Z1SxtG39t9m83OrNv2rfX1A9UYlzhHUaoVwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt=" cifar10 train gpu task manager"\n        title=""\n        src="/static/-cifar10-train-gpu-task-manager-6101f39db197e3b4c78dfa18f2dbae05-c83f1.png"\n        srcset="/static/-cifar10-train-gpu-task-manager-6101f39db197e3b4c78dfa18f2dbae05-569e3.png 240w,\n/static/-cifar10-train-gpu-task-manager-6101f39db197e3b4c78dfa18f2dbae05-93400.png 480w,\n/static/-cifar10-train-gpu-task-manager-6101f39db197e3b4c78dfa18f2dbae05-c83f1.png 960w,\n/static/-cifar10-train-gpu-task-manager-6101f39db197e3b4c78dfa18f2dbae05-23e13.png 1440w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Note that I am getting over 3K examples as second or each batch is taking 0.039 seconds and my CPU is not running that much.</p>\n<p>If I switch to the cpu version I get a very different performance.</p>\n<h2>An Example Application of Tensorflow</h2>\n<h3>Donkey Car</h3>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/donkey-car-make-article-545d8b33713bc1981b043a35af6f6397-cfd28.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.8046875%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABoqpm9QiG/wD/xAAZEAACAwEAAAAAAAAAAAAAAAABAwACERL/2gAIAQEAAQUCa3mJbt8hWLlSjS3c/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BZ//EABYRAAMAAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPwERf//EABkQAAIDAQAAAAAAAAAAAAAAAAABEBEiMf/aAAgBAQAGPwJGn2LZcf/EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQWFx/9oACAEBAAE/IcodXqBzDgz2PzKYbGbKrIx//9oADAMBAAIAAwAAABA73//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxAOz//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCoa//EABkQAQEBAQEBAAAAAAAAAAAAAAERIQBhMf/aAAgBAQABPxARiAVRDpxQShiY086rTD7yOhE+w4RTeBo+8hAzO//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Donkey Car"\n        title=""\n        src="/static/donkey-car-make-article-545d8b33713bc1981b043a35af6f6397-d564d.jpg"\n        srcset="/static/donkey-car-make-article-545d8b33713bc1981b043a35af6f6397-865fd.jpg 240w,\n/static/donkey-car-make-article-545d8b33713bc1981b043a35af6f6397-d40a0.jpg 480w,\n/static/donkey-car-make-article-545d8b33713bc1981b043a35af6f6397-d564d.jpg 960w,\n/static/donkey-car-make-article-545d8b33713bc1981b043a35af6f6397-cfd28.jpg 1024w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The Donkey Car platform is DIY Autonomous Remote Control (RC) car driven by a Raspberry PI and trained using Tensorflow/Keras. The project was created by <a href="https://github.com/wroscoe/donkey">Willam Roscoe</a> and Adam Conway.</p>\n<h4>Where does DL and Tensorflow come in?</h4>\n<p>The car is a modified hobby RC car with a camera and Raspberry Pi added to provide the autonomous smarts. The car is trained by driving the car around a track, capturing the video then training a DL netowrk using Keras/Tensorflow. The actual trainng is done on a host PC then the trained network is transferred back to the Raspberry Pi. A well trained car can then drive around the track without human intervention.</p>\n<p>You can get more details from the <a href="http://www.donkeycar.com/">Donkey Car Home Page</a></p>',fields:{tagSlugs:["/tags/tensor-flow/","/tags/gpu/","/tags/donkey-car/"]},frontmatter:{title:"TensorFlow Lightning Talk",tags:["TensorFlow","GPU","Donkey Car"],date:"2018-02-01T00:00:00Z",description:"A quick introduction to TensorFlow. Created for a Lightning Talk given to my Deep Learning Study Group."}}},pathContext:{slug:"/posts/Tensorflow-Lightning-Talk/"}}}});
//# sourceMappingURL=path---posts-tensorflow-lightning-talk-90f88e04852cfaf4b7f6.js.map