package test

import (
	"path/filepath"
	"runtime"
	"testing"

	"github.com/QQorp/QQat/models"
	"github.com/astaxie/beego"
	. "github.com/smartystreets/goconvey/convey"
)

func init() {
	_, file, _, _ := runtime.Caller(1)
	apppath, _ := filepath.Abs(filepath.Dir(filepath.Join(file, ".."+string(filepath.Separator))))
	beego.TestBeegoInit(apppath)
}

// TestUser : Testing user model
func TestUser(t *testing.T) {
	Convey("Testing user model", t, func() {
		Reset(ResetRedis)
		Convey("Testing CreateUser", func() {
			Convey("Creating a user with blank name, should return an error", func() {
				user, err := models.CreateUser("")

				So(user, ShouldBeNil)
				So(err, ShouldNotBeNil)
			})
			Convey("Creating a user with a name, should return a Channel", func() {
				username := "QQ"
				user, err := models.CreateUser(username)

				So(user, ShouldNotBeNil)
				So(user.Name, ShouldEqual, username)
				So(err, ShouldBeNil)
			})
			Convey("Creating two users with the same name, should return different users", func() {
				username := "QQ"
				user1, err1 := models.CreateUser(username)
				user2, err2 := models.CreateUser(username)

				So(user1, ShouldNotBeNil)
				So(user2, ShouldNotBeNil)
				So(user1.Name, ShouldEqual, username)
				So(user1.Name, ShouldEqual, user2.Name)
				So(user1.UID, ShouldNotEqual, user2.UID)
				So(err1, ShouldBeNil)
				So(err2, ShouldBeNil)
			})
		})
		Convey("Testing GetUser", func() {
			Convey("Getting user with an empty string, should return error", func() {
				user, err := models.GetUser("")

				So(user, ShouldBeNil)
				So(err, ShouldNotBeNil)
			})
			Convey("Getting user that does not exists, should return error", func() {
				user, err := models.GetUser("AAA")

				So(user, ShouldBeNil)
				So(err, ShouldNotBeNil)
			})
			Convey("Creating a user and getting it, should return the user", func() {
				username := "lel"
				createdUser, _ := models.CreateUser(username)
				user, err := models.GetUser(createdUser.UID)

				So(user, ShouldNotBeNil)
				So(err, ShouldBeNil)
				So(user.Name, ShouldEqual, username)
				So(user.UID, ShouldEqual, createdUser.UID)
			})
		})
		Convey("Testing GetAllUsers", func() {
			Convey("Getting all user with 0 users, should return empty array", func() {
				users, err := models.GetAllUsers()

				So(users, ShouldBeEmpty)
				So(err, ShouldBeNil)
			})
			Convey("Getting all users with 1 user created, should return array with 1 element", func() {
				models.CreateUser("lel")
				users, err := models.GetAllUsers()

				So(len(users), ShouldEqual, 1)
				So(err, ShouldBeNil)
			})
			SkipConvey("Getting all users with 5 users created, should return array with 5 elements", func() {
				var nbElements = 5
				for index := 0; index < nbElements; index++ {
					models.CreateUser("lel")
				}
				users, err := models.GetAllUsers()

				So(len(users), ShouldEqual, nbElements)
				So(err, ShouldBeNil)
			})
			SkipConvey("Getting all users with 500 users created, should return array with 500 elements", func() {
				var nbElements = 500
				for index := 0; index < nbElements; index++ {
					models.CreateUser("lel")
				}
				users, err := models.GetAllUsers()

				So(len(users), ShouldEqual, nbElements)
				So(err, ShouldBeNil)
			})
			SkipConvey("Getting all users with 1000 users created, should return array with 1000 elements", func() {
				var nbElements = 1000
				for index := 0; index < nbElements; index++ {
					models.CreateUser("lel")
				}
				users, err := models.GetAllUsers()

				So(len(users), ShouldEqual, nbElements)
				So(err, ShouldBeNil)
			})
		})
		Convey("Testing RemoveUser", func() {
			Convey("Removing user with empty string, should return an error", func() {
				err := models.RemoveUser("")

				So(err, ShouldNotBeNil)
			})
			Convey("Removing user that doesn't exists, should return an error", func() {
				err := models.RemoveUser("AAA")

				So(err, ShouldNotBeNil)
			})
			Convey("Creating and user and removing it, should return no error", func() {
				createdUser, _ := models.CreateUser("AAA")
				err := models.RemoveUser(createdUser.UID)

				So(err, ShouldBeNil)
			})
		})
	})
}
