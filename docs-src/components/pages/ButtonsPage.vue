<template>
  <div>
    <Page title="Buttons" subTitle="look at all the fancy buttons">
      <div class="page--body">
        <!-- Switches -->
        <div class="b-box">
          <div class="b-box-header">Switches</div>
          <input class="switch" type="checkbox" name="ex1" checked="checked" />
          <label for="ex1"></label>
        </div>

        <!-- Colors -->
        <div class="b-box">
          <div class="b-box-header">Colors</div>
          <div class="b-btns">
            <div v-for="color in color1" :key="color" :class="['b-btn', 'is-'+color]">{{ color }}</div>
          </div>
          <div class="b-btns">
            <div v-for="color in color2" :key="color" :class="['b-btn', 'is-'+color]">{{ color }}</div>
          </div>
          <h5>.is-light</h5>
          <div class="b-btns">
            <div v-for="color in color2" :key="color" :class="['b-btn', 'is-light', 'is-'+color]">{{ color }}</div>
          </div>
        </div>

        <!-- Sizes -->
        <div class="b-box">
          <div class="b-box-header">Sizes</div>
          <div class="b-btns">
            <div class="b-btn is-info is-large">Large</div>
            <div class="b-btn is-info is-medium">Medium</div>
            <div class="b-btn is-info">Default</div>
            <div class="b-btn is-info is-small">Small</div>
            <div class="b-btn is-info is-tiny">Tiny</div>
          </div>
        </div>

        <!-- Button with icon -->
        <div class="b-box">
          <div class="b-box-header">Button with icon</div>
          <div class="b-btns">
            <div class="b-btn is-primary is-large">
              <div class="b-icon"><i class="fa fa-star"></i></div>
            </div>
            <div class="b-btn is-primary is-default">
              <div class="b-icon"><i class="fa fa-star"></i></div>
            </div>
            <div class="b-btn is-primary is-tiny">
              <div class="b-icon"><i class="fa fa-star"></i></div>
            </div>
          </div>
          <div class="b-btns">
            <div class="b-btn">
              <div class="b-icon"><i class="fa fa-comment"></i></div>
              <span>Comment</span>
            </div>
            <div class="b-btn is-info">
              <div class="b-icon"><i class="fab fa-twitter"></i></div>
              <span>Twitter</span>
            </div>
            <div class="b-btn is-inverted is-primary">
              <span>Github</span>
              <div class="b-icon"><i class="fab fa-github"></i></div>
            </div>
            <div class="b-btn is-outlined is-danger">
              <span>Delete</span>
              <div class="b-icon"><i class="fa fa-times"></i></div>
            </div>
          </div>
          <div class="b-btns">
            <div class="b-btn is-round">
              <div class="b-icon"><i class="fa fa-expand"></i></div>
            </div>
            <div class="b-btn is-primary is-round">
              <div class="b-icon"><i class="fa fa-redo"></i></div>
            </div>
            <div class="b-btn is-warning is-round">
              <div class="b-icon"><i class="fa fa-minus"></i></div>
            </div>
            <div class="b-btn is-danger is-round">
              <div class="b-icon"><i class="fa fa-times"></i></div>
            </div>
            <div class="b-btn is-info is-round">
              <div class="b-icon"><i class="fa fa-stack"></i></div>
            </div>
          </div>
          <div>Keeps things square no matter size of icon or button</div>
          <div class="b-btns">
            <div class="b-btn">
              <div class="b-icon is-small"><i class="fas fa-heading"></i></div>
            </div>
            <div class="b-btn">
              <div class="b-icon is-medium"><i class="fas fa-heading fa-lg"></i></div>
            </div>
            <div class="b-btn">
              <div class="b-icon"><i class="fas fa-heading fa-2x"></i></div>
            </div>
          </div>
        </div>

        <!-- .is-outlined -->
        <div class="b-box">
          <div class="b-box-header">.is-outlined</div>
          <div class="b-btns">
            <div v-for="color in color2" :key="color" :class="['b-btn', 'is-outlined', 'is-'+color]">{{ color }}</div>
          </div>
        </div>

        <!-- .is-inverted -->
        <div class="b-box has-background-grey">
          <div class="b-box-header">.is-inverted</div>
          <div class="b-btns">
            <div v-for="color in color2" :key="color" :class="['b-btn', 'is-inverted', 'is-'+color]">{{ color }}</div>
          </div>
        </div>

        <!-- .is-inverted.is-outlined -->
        <div class="b-box has-background-grey">
          <div class="b-box-header">.is-inverted.is-outlined</div>
          <div class="b-btns">
            <div v-for="color in color2" :key="color" :class="['b-btn', 'is-inverted', 'is-outlined', 'is-'+color]">{{ color }}</div>
          </div>
        </div>

        <!-- .is-rounded -->
        <div class="b-box">
          <div class="b-box-header">.is-rounded</div>
          <div class="b-btns">
            <div v-for="color in color2" :key="color" :class="['b-btn', 'is-rounded', 'is-'+color]">{{ color }}</div>
          </div>
        </div>

        <!-- .is-round -->
        <div class="b-box">
          <div class="b-box-header">.is-round</div>
          <div class="b-btns">
            <div v-for="color in color2" :key="color" :class="['b-btn', 'is-round', 'is-'+color]">R</div>
          </div>
        </div>

        <!-- .is-loading -->
        <div class="b-box">
          <div class="b-box-header">.is-loading</div>
          <div class="b-btns">
            <div v-for="color in color2" :key="color" :class="['b-btn', 'is-loading', 'is-'+color]">Loading</div>
          </div>
        </div>

        <!-- [disabled] -->
        <div class="b-box">
          <div class="b-box-header">[disabled]</div>
          <div class="b-btns">
            <div v-for="color in color2" :key="color" :class="['b-btn', 'is-'+color]" disabled>{{ color }}</div>
          </div>
        </div>

        <!-- grouped -->
        <div class="b-box">
          <div class="b-box-header">grouped</div>
          <div class="b-btns has-addons">
            <div class="b-btn">Yes</div>
            <div class="b-btn">Maybe</div>
            <div class="b-btn">No</div>
          </div>
          <div class="b-btns has-addons">
            <div class="b-btn">
              <div class="b-icon"><i class="fas fa-align-left"></i></div>
              <span>Left</span>
            </div>
            <div class="b-btn is-info is-selected">
              <div class="b-icon"><i class="fas fa-align-center"></i></div>
              <span>Center</span>
            </div>
            <div class="b-btn">
              <div class="b-icon"><i class="fas fa-align-right"></i></div>
              <span>Right</span>
            </div>
          </div>
        </div>
      </div>
    </Page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: ['white', 'light', 'dark', 'black', 'text'],
      color2: ['default', 'primary', 'accent', 'link', 'info', 'success', 'warning', 'danger']
    };
  }
};
</script>

<style scoped>
.page--body {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-around;
}

.b-box {
  flex: 0 0 49%;
  max-width: 49%;
}
</style>