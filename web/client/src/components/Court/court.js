import React, {Component} from 'react';
import axios from 'axios';
export default class Court extends Component{
    state = {data: []};
    componentDidMount(){
        axios.get('http://localhost:8000')
        .then(res=>{
            let court = res.data.filter(court=>court.Prop_ID === this.props.match.params.id)
            this.setState({data: court})
        })
    }
    render(){
        let court = this.state.data[0] ? this.state.data[0].Name : 'Not Valid Court'
        return(
            <div>
                <h1>
                    {court}
                </h1>
                <div id="live-chat">
		
		            <header class="clearfix">
			
    		        	<a href="#" class="chat-close">x</a>

			            <h4>John Doe</h4>

	            		<span class="chat-message-counter">3</span>

		            </header>

		            <div class="chat">
			
			            <div class="chat-history">
				
				            <div class="chat-message clearfix">
					
					            <img src="http://lorempixum.com/32/32/people" alt="" width="32" height="32" />

					            <div class="chat-message-content clearfix">
						
						            <span class="chat-time">13:35</span>

						            <h5>John Doe</h5>

						            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, explicabo quasi ratione odio dolorum harum.</p>

					            </div> {/*<!-- end chat-message-content -->*/}

				            </div> {/*<!-- end chat-message -->*/}

				            <hr />

				            <div class="chat-message clearfix">
					
					            <img src="http://gravatar.com/avatar/2c0ad52fc5943b78d6abe069cc08f320?s=32" alt="" width="32" height="32" />

            					<div class="chat-message-content clearfix">
						
			            			<span class="chat-time">13:37</span>

						            <h5>Marco Biedermann</h5>

						            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni vel debitis numquam qui tempora rem voluptatem delectus!</p>

					            </div> {/*<!-- end chat-message-content -->*/}

				            </div> {/*<!-- end chat-message -->*/}

				            <hr />

				            <div class="chat-message clearfix">
					
					            <img src="http://lorempixum.com/32/32/people" alt="" width="32" height="32" />

					            <div class="chat-message-content clearfix">
						
                                    <span class="chat-time">13:38</span>

                                    <h5>John Doe</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

					            </div> {/*<!-- end chat-message-content -->*/}

			            	</div> {/*<!-- end chat-message -->*/}

				            <hr />

			            </div> {/*<!-- end chat-history -->*/}

			            <p class="chat-feedback">Your partner is typing…</p>

			            <form action="#" method="post">

				            <fieldset>
					
                                <input type="text" placeholder="Type your message…" autofocus />
                                <input type="hidden" />

            				</fieldset>

		            	</form>

		            </div> {/*<!-- end chat -->*/}

            	</div> {/*<!-- end live-chat -->*/}

            </div>
        )
    }
}