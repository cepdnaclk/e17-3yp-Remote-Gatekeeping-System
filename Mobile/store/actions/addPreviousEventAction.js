import Event from "../../Modal/Event";

export const CLOSE_PREVIOUS_EVENT = "CLOSE_PREVIOUS_EVENT";
export const GET_EVENT_DETAILS = "GET_EVENT_DETAILS";

export const fetchEvents = () => {
  return async (dispatch) => {
    //async code
    const response = await fetch(
      "https://remote-getekeeping-device-default-rtdb.firebaseio.com/events.json"
    );

    const resData = await response.json();

    console.log(resData);

    const loadedEvents = [];

    for (const key in resData) {
      loadedEvents.push(
        new Event(
          key,
          resData[key].name,
          new Date(2018, 11, 24, 10, 33, 30, 0),
          resData[key].rating,
          resData[key].description,
          resData[key].mailBoxAccess,
          null
        )
      );
    }

    dispatch({ type: GET_EVENT_DETAILS, events: loadedEvents.reverse() });
  };
};

export const addNewPrevEvent = (name, rating, description, mailBoxAccess) => {
  return async (dispatch) => {
    //async code
    const response = await fetch(
      "https://remote-getekeeping-device-default-rtdb.firebaseio.com/events.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //might have to change
          name,
          rating,
          description,
          mailBoxAccess,
        }),
      }
    );

    const resData = await response.json();

    eventDetails.id = resData.name;

    dispatch({
      type: CLOSE_PREVIOUS_EVENT,
      newEvent: {
        id: resData.name,
        name: name,
        rating: rating,
        description: description,
        mailBoxAccess: mailBoxAccess,
      },
    });
  };
};
