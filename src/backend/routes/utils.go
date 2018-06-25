package routes

import (
	"strconv"
)

func asByteString(val int) []byte {
	return []byte(strconv.Itoa(val))
}
