<template>
<div>
  <Navigation />
  <div class="container-2">
    <v-row no-gutters class="mt-1">
      <head>
        <!--  This file has been downloaded from bootdey.com    @bootdey on twitter -->
        <!--  All snippets are MIT license http://bootdey.com/license -->
        <link
          href="http://netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="container">
        <div class="page-profile">
          <div class="row">
            <!-- COL 1 -->
            <div class="col-md-3">
              <section class="panel">
                <div class="panel-body noradius padding-10">
                  <figure class="margin-bottom-10">
                    <!-- image -->

                    <v-img
                      class="img-responsive rounded-circle"
                      :src="require('@/assets/img/'+info.pfp)"
                      alt="John"
                    ></v-img>
                  </figure>
                  <!-- /image -->

                  <!-- progress bar -->
                  <h6 class="progress-head">
                    Profile Completion
                    <span class="pull-right">60%</span>
                  </h6>
                  <div class="progress progress-xs">
                    <div class="progress-bar" role="progressbar" style="width: 60%;"></div>
                  </div>
                  <!-- /progress bar -->

                  <!-- updated -->
                  <ul class="list-unstyled size-13">
                    <li class="text-gray">
                      <i class="fa fa-check"></i> Update Your Birthday
                    </li>
                    <li class="text-gray">
                      <i class="fa fa-check"></i> Update Profile Picture
                    </li>
                    <li>Confirm Your Account</li>
                    <li>Update Your Address</li>
                  </ul>
                  <!-- /updated -->

                  <hr class="half-margins" />

                  <!-- About -->
                  <h3 class="text-black">
                    {{info.name}}
                    <small class="text-gray size-14">/ CEO</small>
                  </h3>
                  <p
                    class="size-12"
                  >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam tincidunt erat volutpat laoreet dolore magna aliquam tincidunt erat volutpat.</p>
                  <!-- /About -->

                  <hr class="half-margins" />
                  <!-- Social -->
                  <h6>Follow Me</h6>
                  <a href="#" class="btn ico-only btn-facebook btn-xs" title="Facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-twitter btn-xs" title="Twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-google-plus btn-xs" title="Google plus">
                    <i class="fa fa-google-plus"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-linkedin btn-xs" title="Linked In">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-pinterest btn-xs" title="Pinterest">
                    <i class="fa fa-pinterest"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-flickr btn-xs" title="Flickr">
                    <i class="fa fa-flickr"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-tumblr btn-xs" title="Tumblr">
                    <i class="fa fa-tumblr"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-skype btn-xs" title="Skype">
                    <i class="fa fa-skype"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-stackoverflow btn-xs" title="Stack Overflow">
                    <i class="fa fa-stack-overflow"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-instagram btn-xs" title="Instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-dribbble btn-xs" title="Dribble">
                    <i class="fa fa-dribbble"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-youtube btn-xs" title="Youtube">
                    <i class="fa fa-youtube"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-vimeo btn-xs" title="Vimeo">
                    <i class="fa fa-vimeo-square"></i>
                  </a>
                  <a href="#" class="btn ico-only btn-rss btn-xs" title="Rss">
                    <i class="fa fa-rss"></i>
                  </a>
                  <!-- /Social -->
                </div>
              </section>
            </div>
            <!-- /COL 1 -->

            <!-- COL 2 -->
            <div class="col-md-5">
              <div class="tabs white nomargin-top">
                <ul class="nav nav-tabs tabs-primary">
                  <li :class="{active:!this.toggle}">
                    <a @click="toggleEdit()" data-toggle="tab">Overview</a>
                  </li>
                  <li :class="{active:this.toggle}">
                    <a @click="toggleEdit()" data-toggle="tab">Edit</a>
                  </li>
                </ul>

                <div class="tab-content">
                  <!-- Overview -->
                  <div
                    v-show="!this.toggle"
                    id="overview"
                    class="tab-pane"
                    :class="{active:!this.toggle}"
                  >
                    <form class="well">
                      <textarea rows="2" class="form-control" placeholder="What's on your mind?"></textarea>
                      <div class="margin-top-10">
                        <button type="submit" class="btn btn-sm btn-primary pull-right">Post</button>
                        <a
                          href="#"
                          class="btn btn-link profile-btn-link"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title
                          data-original-title="Add a Location"
                        >
                          <i class="fa fa-map-marker"></i>
                        </a>
                        <a
                          href="#"
                          class="btn btn-link profile-btn-link"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title
                          data-original-title="Add Photo"
                        >
                          <i class="fa fa-camera"></i>
                        </a>
                        <a
                          href="#"
                          class="btn btn-link profile-btn-link"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title
                          data-original-title="Add File"
                        >
                          <i class="fa fa-file"></i>
                        </a>
                      </div>
                    </form>

                    <hr class="invisible half-margins" />
                    <!-- COMMENT -->
                    <ul class="comment list-unstyled padding-10">
                      <li class="comment">
                        <!-- avatar -->
                        <img
                          class="avatar rounded-circle"
                          :src="require('@/assets/img/'+info.pfp)"
                          width="50"
                          height="50"
                          alt="avatar"
                        />
                        <!-- comment body -->
                        <div class="comment-body">
                          <a href="#" class="comment-author">
                            <small class="text-muted pull-right">12 Minutes ago</small>
                            <span>{{info.name}}</span>
                          </a>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt laoreet dolore magna aliquam tincidunt erat volutpat laoreet
                            dolore magna aliquam tincidunt erat volutpat.
                          </p>
                        </div>
                        <!-- /comment body -->

                        <!-- options -->
                        <ul class="list-inline size-11 margin-top-10">
                          <li>
                            <a href="#" class="text-info">
                              <i class="fa fa-reply"></i> Reply
                            </a>
                          </li>
                          <li>
                            <a href="#" class="text-success">
                              <i class="fa fa-thumbs-up"></i> Like
                            </a>
                          </li>
                          <li>
                            <a href="#" class="text-muted">Show All Comments (36)</a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="text-danger">Delete</a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="text-primary">Edit</a>
                          </li>
                        </ul>
                      </li>
                      <!-- /options -->

                      <li class="comment comment-reply">
                        <!-- avatar -->
                        <img
                          class="avatar rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          width="35"
                          height="35"
                          alt="avatar"
                        />

                        <!-- comment body -->
                        <div class="comment-body">
                          <a href="#" class="comment-author">
                            <small class="text-muted pull-right">4 Minutes ago</small>
                            <span>Ioana Doe</span>
                          </a>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy!
                            <i
                              class="fa fa-smile-o green"
                            ></i>
                          </p>
                        </div>
                        <!-- /comment body -->

                        <!-- options -->
                        <ul class="list-inline size-11">
                          <li>
                            <a href="#" class="text-success">
                              <i class="fa fa-thumbs-up"></i> Like
                            </a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="text-danger">Delete</a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="text-primary">Edit</a>
                          </li>
                        </ul>
                        <!-- /options -->
                      </li>

                      <li class="comment comment-reply">
                        <!-- avatar -->
                        <img
                          class="avatar rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          width="35"
                          height="35"
                          alt="avatar"
                        />

                        <!-- comment body -->
                        <div class="comment-body">
                          <a href="#" class="comment-author">
                            <small class="text-muted pull-right">a moment ago</small>
                            <span>Simona Doe</span>
                          </a>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy!
                            <i
                              class="fa fa-smile-o green"
                            ></i>
                          </p>
                        </div>
                        <!-- /comment body -->

                        <!-- options -->
                        <ul class="list-inline size-11">
                          <li>
                            <a href="#" class="text-success">
                              <i class="fa fa-thumbs-up"></i> Like
                            </a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="text-danger">Delete</a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="text-primary">Edit</a>
                          </li>
                        </ul>
                        <!-- /options -->
                      </li>
                    </ul>
                    <!-- /COMMENT -->

                    <!-- COMMENT -->
                    <ul class="comment list-unstyled padding-10">
                      <li class="comment">
                        <!-- avatar -->
                        <img
                          class="avatar rounded-circle"
                          :src="require('@/assets/img/'+info.pfp)"
                          width="50"
                          height="50"
                          alt="avatar"
                        />

                        <!-- comment body -->
                        <div class="comment-body">
                          <a href="#" class="comment-author">
                            <small class="text-muted pull-right">12 Minutes ago</small>
                            <span>{{info.name}}</span>
                          </a>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt laoreet dolore magna aliquam tincidunt erat volutpat laoreet
                            dolore magna aliquam tincidunt erat volutpat.
                          </p>
                        </div>
                        <!-- /comment body -->

                        <!-- options -->
                        <ul class="list-inline size-11 margin-top-10">
                          <li>
                            <a href="#" class="text-info">
                              <i class="fa fa-reply"></i> Reply
                            </a>
                          </li>
                          <li>
                            <a href="#" class="text-success">
                              <i class="fa fa-thumbs-up"></i> Like
                            </a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="text-danger">Delete</a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="text-primary">Edit</a>
                          </li>
                        </ul>
                      </li>
                      <!-- /options -->

                      <li class="comment comment-reply">
                        <!-- avatar -->
                        <img
                          class="avatar rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar5.png"
                          width="35"
                          height="35"
                          alt="avatar"
                        />

                        <!-- comment body -->
                        <div class="comment-body">
                          <a href="#" class="comment-author">
                            <small class="text-muted pull-right">4 Minutes ago</small>
                            <span>Ioana Doe</span>
                          </a>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy!
                            <i
                              class="fa fa-smile-o green"
                            ></i>
                          </p>
                        </div>
                        <!-- /comment body -->

                        <!-- options -->
                        <ul class="list-inline size-11">
                          <li>
                            <a href="#" class="text-success">
                              <i class="fa fa-thumbs-up"></i> Like
                            </a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="text-danger">Delete</a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="text-primary">Edit</a>
                          </li>
                        </ul>
                        <!-- /options -->
                      </li>

                      <li class="comment comment-reply">
                        <!-- avatar -->
                        <img
                          class="avatar rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar6.png"
                          width="35"
                          height="35"
                          alt="avatar"
                        />

                        <!-- comment body -->
                        <div class="comment-body">
                          <a href="#" class="comment-author">
                            <small class="text-muted pull-right">a moment ago</small>
                            <span>Simona Doe</span>
                          </a>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy!
                            <i
                              class="fa fa-smile-o green"
                            ></i>
                          </p>
                        </div>
                        <!-- /comment body -->

                        <!-- options -->
                        <ul class="list-inline size-11">
                          <li>
                            <a href="#" class="text-success">
                              <i class="fa fa-thumbs-up"></i> Like
                            </a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="text-danger">Delete</a>
                          </li>
                          <li class="pull-right">
                            <a href="#" class="text-primary">Edit</a>
                          </li>
                        </ul>
                        <!-- /options -->
                      </li>
                      <li>
                        <div class="input-group">
                          <input
                            id="btn-input"
                            type="text"
                            class="form-control"
                            placeholder="Type your message..."
                          />
                          <span class="input-group-btn">
                            <button class="btn btn-primary" id="btn-chat">
                              <i class="fa fa-reply"></i> Reply
                            </button>
                          </span>
                        </div>
                      </li>
                    </ul>
                    <!-- /COMMENT -->
                  </div>

                  <!-- Edit -->
                  <div v-show="this.toggle" id="edit">
                    <form class="form-horizontal padding-10" method="get">
                      <h4>Personal Information</h4>
                      <fieldset>
                        <div class="form-group">
                          <label class="col-md-3 control-label" for="profileFirstName">First Name</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" id="profileFirstName" />
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-3 control-label" for="profileLastName">Last Name</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" id="profileLastName" />
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-3 control-label" for="profileAddress">Address</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" id="profileAddress" />
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-3 control-label" for="profileCompany">Company</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" id="profileCompany" />
                          </div>
                        </div>
                      </fieldset>

                      <hr />

                      <h4>About</h4>
                      <fieldset>
                        <div class="form-group">
                          <label class="col-xs-3 control-label">Public Profile</label>
                          <div class="col-md-8">
                            <label class="checkbox">
                              <input type="checkbox" value="1" checked="checked" id="profilePublic" />
                              <i></i> Checkbox 1
                            </label>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-3 control-label" for="profileBio">Biographical Info</label>
                          <div class="col-md-8">
                            <textarea class="form-control" rows="3" id="profileBio"></textarea>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="sky-form">
                            <label class="col-xs-3 control-label">Profile Image</label>
                            <div class="col-md-8">
                              <label for="file" class="input input-file">
                                <div class="button">
                                  <input
                                    type="file"
                                    id="file"
                                    onchange="this.parentNode.nextSibling.value = this.value"
                                  />Browse
                                </div>
                                <input type="text" readonly />
                              </label>
                              <a href="#" class="btn btn-danger btn-xs nomargin">
                                <i class="fa fa-times"></i> Remove Current Image
                              </a>
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <hr />

                      <h4>Change Password</h4>
                      <fieldset class="mb-xl">
                        <div class="form-group">
                          <label
                            class="col-md-3 control-label"
                            for="profileNewPassword"
                          >New Password</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" id="profileNewPassword" />
                          </div>
                        </div>
                        <div class="form-group">
                          <label
                            class="col-md-3 control-label"
                            for="profileNewPasswordRepeat"
                          >Repeat New Password</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" id="profileNewPasswordRepeat" />
                          </div>
                        </div>
                      </fieldset>

                      <div class="row">
                        <div class="col-md-9 col-md-offset-3">
                          <button type="submit" class="btn btn-primary">Submit</button>
                          <button type="reset" class="btn btn-default">Reset</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!-- /COL 2 -->

            <!-- COL 3 -->
            <div class="col-md-4">
              <!-- projects -->
              <section class="panel panel-default">
                <header class="panel-heading">
                  <h2 class="panel-title elipsis">
                    <i class="fa fa-rss"></i> Projects
                  </h2>
                </header>

                <div class="panel-body noradius padding-10">
                  <ul class="bullet-list list-unstyled">
                    <li class>
                      <h3>Epona HTML5 Template</h3>
                      <span
                        class="text-gray size-12"
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing</span>
                    </li>
                    <li class>
                      <h3>Atropos Template</h3>
                      <span
                        class="text-gray size-12"
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing</span>
                    </li>
                    <li class>
                      <h3>isisone Template</h3>
                      <span
                        class="text-gray size-12"
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing</span>
                    </li>
                    <li class>
                      <h3>Deusone Template</h3>
                      <span
                        class="text-gray size-12"
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing</span>
                    </li>
                  </ul>
                </div>
              </section>
              <!-- /projects -->

              <!-- activity -->
              <section class="panel panel-default">
                <header class="panel-heading">
                  <h2 class="panel-title elipsis">
                    <i class="fa fa-rss"></i> Activity
                  </h2>
                </header>

                <div class="panel-body noradius padding-10">
                  <!-- activity list -->
                  <div class="row profile-activity">
                    <!-- activity item -->
                    <div class="col-xs-2 col-sm-1">
                      <time datetime="2014-06-29" class="datebox">
                        <strong>Jun</strong>
                        <span>29</span>
                      </time>
                    </div>

                    <div class="col-xs-10 col-sm-11">
                      <h6>
                        <a href="page-sidebar.html">Lorem ipsum dolor sit amet</a>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt laoreet dolore magna aliquam tincidunt erat volutpat laoreet dolore magna aliquam
                        tincidunt erat volutpat.
                      </p>
                    </div>
                    <!-- /activity item -->

                    <div class="col-sm-12">
                      <hr class="half-margins" />
                    </div>
                    <!-- /activity separator -->

                    <!-- activity item -->
                    <div class="col-xs-2 col-sm-1">
                      <time datetime="2014-06-29" class="datebox">
                        <strong>Jun</strong>
                        <span>29</span>
                      </time>
                    </div>

                    <div class="col-xs-10 col-sm-11">
                      <h6>
                        <a href="page-sidebar.html">Sed diam nonummy nibh euismod</a>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt laoreet dolore magna aliquam tincidunt erat volutpat laoreet dolore magna aliquam
                        tincidunt erat volutpat.
                      </p>
                    </div>
                    <!-- /activity item -->

                    <div class="col-sm-12">
                      <hr class="half-margins" />
                    </div>
                    <!-- /activity separator -->

                    <!-- paginatoin -->
                    <div class="text-center">
                      <ul class="pagination pagination-sm">
                        <li class="disabled">
                          <a href="#">Prev</a>
                        </li>
                        <li class="active">
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">Next</a>
                        </li>
                      </ul>
                    </div>
                    <!-- /paginatoin -->
                  </div>
                  <!-- /activity list -->
                </div>
              </section>
              <!-- /activity -->
            </div>
            <!-- /COL 3 -->
          </div>
        </div>
      </div>
    </v-row>
  </div>
</div>
</template>

<script>
import Navigation from "@/components/commons/Navigation.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      toggle: false,
    };
  },
  computed: {
    ...mapState(["mode"]),
    info() {
      var user = {
        name: "",
        username: "",
        pfp: "",
      };

      this.mode == 1 ? (user.name = "Frank Hesse") : (user.name = "Leo Barnes");
      this.mode == 1
        ? (user.username = "NeutronBlast")
        : (user.username = "EternalGrey");
      this.mode == 1 ? (user.pfp = "stock-1.jpg") : (user.pfp = "stock-3.jpg");
      return user;
    },
  },
  methods: {
    toggleEdit() {
      this.toggle = !this.toggle;
    },
  },
};
</script>
<style scoped>
.padding-10 {
  padding: 10px !important;
}

/**    Page Profile
 *************************************************** **/
.profile-buttons {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 15px;
}
.profile-buttons h2 {
  margin: 0;
  padding: 0;
  font-size: 30px;
  line-height: 30px;
}
.profile-btn-link {
  padding: 4px 10px !important;
  margin: 0 !important;
  color: #999;
}
.profile-activity {
  margin-top: 17px;
}
.profile-activity h6 {
  margin-bottom: 6px;
  padding-left: 15px;
  font-weight: bold;
}
.profile-activity p {
  font-size: 13px;
  padding-left: 15px;
}

.page-profile h6 {
  color: #999;
  font-size: 1em;
  letter-spacing: normal;
  line-height: 18px;
  margin: 0 0 6px 0;
}
.page-profile div.tabs ul.nav-tabs li.active a,
.page-profile .tab-content {
  background-color: #fff !important;
}

/** Comments
 *************************************************** **/
#comments {
  margin-top: 60px;
}
#comments .comment {
  margin: 40px 0;
}
#comments a.replyBtn {
  float: right;
  font-size: 11px;
  text-transform: uppercase;
}
#comments span.user-avatar {
  background: #eee;
  width: 64px;
  height: 64px;
  float: left;
  margin-right: 10px;
}

ul.comment {
  margin-bottom: 30px;
}
li.comment {
  position: relative;
  margin-bottom: 25px;
  font-size: 13px;
}
li.comment p {
  margin: 0;
  padding: 0;
}
li.comment img.avatar {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
}
li.comment.comment-reply img.avatar {
  left: 6px;
  top: 6px;
}
li.comment .comment-body {
  position: relative;
  padding-left: 60px;
}
li.comment.comment-reply {
  margin-left: 60px;
  background-color: #fafafa;
  padding: 6px;
  margin-bottom: 6px;
}
li.comment a.comment-author {
  margin-bottom: 6px;
  display: block;
}
li.comment a.comment-author span {
  font-size: 15px;
}
li.comment-relpy {
  margin-top: -15px;
  margin-bottom: 20px;
}
time.datebox strong {
  padding: 2px 0;
  color: #fff;
  background-color: #1c2b36;
  display: block;
  text-align: center;
}
time.datebox span {
  font-size: 15px;
  color: #2f2f2f;
  display: block;
  text-align: center;
}

/**    17. Panel
 *************************************************** **/
/* pannel */
.panel {
  position: relative;

  background: transparent;

  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.panel.fullscreen .accordion .panel-body,
.panel.fullscreen .panel-group .panel-body {
  position: relative !important;
  top: auto !important;
  left: auto !important;
  right: auto !important;
  bottom: auto !important;
}

.panel.fullscreen .panel-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.panel > .panel-heading {
  text-transform: uppercase;

  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}
.panel > .panel-heading small {
  text-transform: none;
}
.panel > .panel-heading strong {
  font-family: Arial, Helvetica, Sans-Serif;
}
.panel > .panel-heading .buttons {
  display: inline-block;
  margin-top: -3px;
  margin-right: -8px;
}
.panel-default > .panel-heading {
  padding: 15px 15px;
  background: #fff;
}
.panel-default > .panel-heading small {
  color: #9e9e9e;
  font-size: 12px;
  font-weight: 300;
}
.panel-clean {
  border: 1px solid #ddd;
  border-bottom: 3px solid #ddd;

  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}
.panel-clean > .panel-heading {
  padding: 11px 15px;
  background: #fff !important;
  color: #000;
  border-bottom: #eee 1px solid;
}
.panel > .panel-heading .btn {
  margin-bottom: 0 !important;
}

.panel > .panel-heading .progress {
  background-color: #ddd;
}

.panel > .panel-heading .pagination {
  margin: -5px;
}

.panel-default {
  border: 0;
}

.panel-light {
  border: rgba(0, 0, 0, 0.1) 1px solid;
}
.panel-light > .panel-heading {
  padding: 11px 15px;
  background: transaprent;
  border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
}

.panel-heading a.opt > .fa {
  display: inline-block;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  margin-right: 2px;
  padding: 5px;
  position: relative;
  text-align: right;
  top: -1px;
}

.panel-heading > label > .form-control {
  display: inline-block;
  margin-top: -8px;
  margin-right: 0;
  height: 30px;
  padding: 0 15px;
}
.panel-heading ul.options > li > a {
  color: #999;
}
.panel-heading ul.options > li > a:hover {
  color: #333;
}
.panel-title a {
  text-decoration: none;
  display: block;
  color: #333;
}

.panel-body {
  background-color: #fff;
  padding: 15px;

  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}
.panel-body.panel-row {
  padding: 8px;
}

.panel-footer {
  font-size: 12px;
  border-top: rgba(0, 0, 0, 0.02) 1px solid;
  background-color: rgba(0255, 255, 255, 1);

  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}

/** Bullet List
 *************************************************** **/
ul.bullet-list li {
  position: relative;
  padding: 0 0 0 20px;
  margin: 0 0 10px;
}
ul.bullet-list li:before {
  border: 6px solid #cccccc;
  border-radius: 100px;
  content: "";
  display: inline-block;
  left: 0;
  margin: 0;
  position: absolute;
  top: 5px;
  z-index: 2;
}
ul.bullet-list li.red:before {
  border-color: #d64b4b;
}
ul.bullet-list li.green:before {
  border-color: #4dd79c;
}
ul.bullet-list li.blue:before {
  border-color: #0090d9;
}
ul.bullet-list li.orange:before {
  border-color: #e2a917;
}
ul.bullet-list li h3 {
  display: block;
  font-weight: 700;
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.4;
  color: #171717;
  margin: 0;
  padding: 0;
}

/** Date Box
 *************************************************** **/
time.datebox {
  font-size: 14px;
  display: block;
  position: relative;
  width: 35px;
  border-color: #2e363f;
  background-color: #fff;
  margin: 3px auto;
  border: 1px solid;
}
</style>