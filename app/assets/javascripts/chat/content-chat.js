//= require ./content-chat/contact-profile
//= require ./content-chat/messages
//= require ./content-chat/message-input

Vue.component('content-chat', {
  props: ['user', 'contact_info'],
  data: function() {
    return {
      messages: []
    }
  },
  template: "#content-chat-template",
  methods: {
    updateMessages: function(new_message) {
      this.messages.push(new_message);
      this.$emit('updateLastMessage', new_message);
    },
    submitMessage: function(message_content) {
      // TODO AJAX
      this.updateMessages({
        user_id: this.contact_info.user_id,
        type: 'sent',
        message_img: this.user.image_url,
        content: message_content.content
      });
    }
  },
  created: function() {
    this.messages = [
      {
        type: 'sent',
        message_img: 'http://emilcarlsson.se/assets/mikeross.png',
        content: 'Agora vamo mudar isso ai, talquei?!'
      },
      {
        type: 'replies',
        message_img: 'http://emilcarlsson.se/assets/harveyspecter.png',
        content: 'Vai mudar isso ai mesmo?'
      }
    ];
  }
});
