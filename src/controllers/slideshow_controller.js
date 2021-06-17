// src/controllers/slideshow_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]
  static values = { index: Number }

  next() {
    (this.indexValue < 3) ? this.indexValue++ : this.indexValue = 0
  }

  previous() {
    (this.indexValue > 0) ? this.indexValue-- : this.indexValue = 3
  }

  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue
    })
  }
}
