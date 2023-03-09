const app = Vue.createApp({
  data() {
    return {
      selectedRating: null,
      isSubmitted: false,
    };
  },
  methods: {
    selectRating(rating) {
      this.selectedRating = rating;
      document.querySelectorAll('.float-child').forEach((button) => {
        button.classList.remove('active');
      });
      document.querySelector(`#rating-${rating}`).classList.add('active');
    },
    submitRating() {
      if (this.selectedRating !== null) {
        this.isSubmitted = true;
      }
    },
    resetRating() {
      this.selectedRating = null;
      this.isSubmitted = false;
      document.querySelectorAll('.float-child').forEach((button) => {
        button.classList.remove('active');
      });
    },
  },
});

app.mount('#app');

const buttons = document.querySelectorAll('.float-child, .submit-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    button.classList.add('active');
  });
});
