import { useRef, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TfiTruck } from "react-icons/tfi";
import { FiBox } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import PasswordAttendanceModal from "./components/passwordModal";
import ClosingAttendanceModal from "./components/clossingAttendanceModal";

import "./App.css";

const sellersList = [
  {
    seller_id: 484,
    user_full_name: "Valeria Restrepo",
    store_id: 4,
    avatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    serve_free: true,
  },
  {
    seller_id: 1383,
    user_full_name: "Flora O’Connor",
    store_id: 4,
    avatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Red&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Bat&eyeType=Happy&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Light",
    serve_free: true,
  },
  {
    seller_id: 668,
    user_full_name: "Callum MacLeod",
    store_id: 4,
    avatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Round&hatColor=Black&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=GraphicShirt&clotheColor=Heather&graphicType=Cumbia&eyeType=Close&eyebrowType=SadConcernedNatural&mouthType=Twinkle&skinColor=Light",
    serve_free: true,
  },
  {
    seller_id: 590,
    user_full_name: "Arben Krasniqi",
    store_id: 4,
    avatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale",
    serve_free: true,
  },
  {
    seller_id: 1906,
    user_full_name: "Liridona Gashi",
    store_id: 4,
    avatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=CollarSweater&clotheColor=White&eyeType=WinkWacky&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Tanned",
    serve_free: true,
  },
];

const allQuestions = [
  {
    "pack_test_id": 154,
    "store_id": 5,
    "question": {
      "id": 1701,
      "question": "PRODUCT AVAILABILITY",
      "label": "PRODUCT AVAILABILITY",
      "active": true,
      "icon": <FiShoppingCart />,
      "order": 1,
      "options": [
        {
          "id": 4001,
          "label": "PRODUCT OUT OF STOCK",
          "value": "True",
          "type": "",
          "order": 1,
          "question": 1701
        },
        {
          "id": 4002,
          "label": "PRODUCT NOT AVAILABLE IN STORE",
          "value": "True",
          "type": "",
          "order": 2,
          "question": 1701
        }
      ],
      "subquestions": [
        {
          "id": 1702,
          "question": "COLOR",
          "label": "COLOR",
          "active": true,
          "img_class": "",
          "order": 1,
          "options": [
            {
              "id": 4003,
              "label": "COLOR NOT AVAILABLE",
              "value": "True",
              "type": "",
              "order": 1,
              "question": 1702
            },
            {
              "id": 4004,
              "label": "LOOKED FOR SPECIFIC COLOR",
              "value": "True",
              "type": "",
              "order": 2,
              "question": 1702
            }
          ],
          "subquestions": []
        },
        {
          "id": 1703,
          "question": "SIZE",
          "label": "SIZE",
          "active": true,
          "img_class": "",
          "order": 2,
          "options": [
            {
              "id": 4005,
              "label": "SIZE OUT OF STOCK",
              "value": "True",
              "type": "",
              "order": 1,
              "question": 1703
            },
            {
              "id": 4006,
              "label": "DIDN'T FIND IDEAL SIZE",
              "value": "True",
              "type": "",
              "order": 2,
              "question": 1703
            }
          ],
          "subquestions": []
        }
      ]
    }
  },
  {
    "pack_test_id": 160,
    "store_id": 4,
    "question": {
      "id": 1685,
      "question": "SHIPPING RESTRICTIONS",
      "label": "SHIPPING RESTRICTIONS",
      "active": true,
      "icon": <TfiTruck />,
      "order": 7,
      "options": [
        {
          "id": 3927,
          "label": "NO SHIPPING TO THIS REGION",
          "value": "True",
          "type": "",
          "order": 1,
          "question": 1685
        },
        {
          "id": 3928,
          "label": "SHIPPING DELAY DUE TO WEATHER",
          "value": "True",
          "type": "",
          "order": 2,
          "question": 1685
        }
      ],
      "subquestions": [
        {
          "id": 1686,
          "question": "SHIPPING ALTERNATIVES",
          "label": "SHIPPING ALTERNATIVES",
          "active": true,
          "img_class": "",
          "order": 1,
          "options": [
            {
              "id": 3929,
              "label": "EXPEDITED SHIPPING AVAILABLE",
              "value": "True",
              "type": "",
              "order": 1,
              "question": 1686
            },
            {
              "id": 3930,
              "label": "NO ALTERNATIVE AVAILABLE",
              "value": "True",
              "type": "",
              "order": 2,
              "question": 1686
            }
          ],
          "subquestions": []
        }
      ]
    }
  },
  {
    "pack_test_id": 159,
    "store_id": 4,
    "question": {
      "id": 1683,
      "question": "STOCK UNAVAILABLE",
      "label": "STOCK UNAVAILABLE",
      "active": true,
      "icon": <FiBox />,
      "order": 6,
      "options": [
        {
          "id": 3923,
          "label": "ITEM OUT OF STOCK",
          "value": "True",
          "type": "",
          "order": 1,
          "question": 1683
        },
        {
          "id": 3924,
          "label": "ITEM DISCONTINUED",
          "value": "True",
          "type": "",
          "order": 2,
          "question": 1683
        }
      ],
      "subquestions": [
        {
          "id": 1684,
          "question": "ALTERNATIVE OPTION",
          "label": "ALTERNATIVE OPTION",
          "active": true,
          "img_class": "",
          "order": 1,
          "options": [
            {
              "id": 3925,
              "label": "YES, AVAILABLE IN OTHER COLORS",
              "value": "True",
              "type": "",
              "order": 1,
              "question": 1684
            },
            {
              "id": 3926,
              "label": "NO, NO ALTERNATIVE AVAILABLE",
              "value": "True",
              "type": "",
              "order": 2,
              "question": 1684
            }
          ],
          "subquestions": []
        }
      ]
    }
  },
  {
    "pack_test_id": 174,
    "store_id": 4,
    "question": {
      "id": 1678,
      "question": "OTHER",
      "label": "OTHER",
      "active": true,
      "icon": <FiInfo />,
      "order": 1,
      "options": [
        {
          "id": 3910,
          "label": "WHAT HAPPENED?",
          "value": "True",
          "type": "input",
          "order": 1,
          "question": 1678
        }
      ],
      "subquestions": []
    }
  }

];

function App() {
  const isDraggingRef = useRef(false);
  const partialResult = useRef();

  const [drawer, setDrawer] = useState(null);
  const [freeSellers, setFreeSellers] = useState([]);
  const [inAttendanceSellers, setInAttendanceSellers] = useState([]);
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [sellers, setSellers] = useState(sellersList);

  const isOpenPasswordAttendanceModal = drawer === "PASSWORD_ATTENDANCE_MODAL";
  const isOpenClosingAttendanceModal = drawer === "CLOSING_ATTENDANCE_MODAL";

  const deletePreviousState = (sourceDroppableId, taskId) => {
    switch (sourceDroppableId) {
      case "1":
        setSellers(removeItemById(taskId, sellers));
        break;
      case "2":
        setFreeSellers(removeItemById(taskId, freeSellers));
        break;
      case "3":
        setInAttendanceSellers(removeItemById(taskId, inAttendanceSellers));
        break;
    }
  };

  const findItemById = (id, array) => {
    return array.find((item) => item.seller_id == id);
  };

  const goingOn = () => {
    const { destination, source, draggableId } = partialResult.current;

    // REMOVE FROM SOURCE ARRAY
    deletePreviousState(source.droppableId, draggableId);
    // GET ITEM
    const seller = findItemById(draggableId, [
      ...sellers,
      ...freeSellers,
      ...inAttendanceSellers,
    ]);

    // ADD ITEM
    setNewState(destination.droppableId, seller);
  };

  const handleButtonPasswordClick = (num) => {
    const newInputs = [...inputs];
    const firstEmptyIndex = newInputs.findIndex((input) => input === "");
    if (firstEmptyIndex !== -1) {
      newInputs[firstEmptyIndex] = num;
      setInputs(newInputs);
      if (firstEmptyIndex === 3) {
        handlePasswordSubmit(newInputs);
      }
    }
  };

  const handleChangePassword = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleCloseAttendence = async (result) => {
    try {
      if (partialResult.current.destination.droppableId === "1") {
        // Aqui sería desloguear también
      }
      toggleDrawer(null);
      goingOn();
    } catch (error) {
      console.log({ error });
      toggleDrawer(null);
    }
  };

  const handleClosePasswordModal = () => {
    toggleDrawer(null);
    setInputs(["", "", "", ""]);
  };

  const handleDragStart = () => {
    console.log("handleDragStart");
    handleIsDragging(true);
  };

  const handleDragEnd = (result) => {
    partialResult.current = result;
    const { destination, source, draggableId } = result;

    console.log({ result });

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index !== source.index
    ) {
      reorderList(result);
      return;
    }

    if ((source.droppableId === "1" && destination.droppableId === "2") || (source.droppableId === "1" && destination.droppableId === "3")) {
      toggleDrawer("PASSWORD_ATTENDANCE_MODAL");
    } else if (source.droppableId === "3") {
      toggleDrawer("CLOSING_ATTENDANCE_MODAL");
    } else {
      goingOn();
    }

    // if (source.droppableId === "1" && destination.droppableId === "3") {
    //   //
    // }

    // if (source.droppableId === "1" && destination.droppableId === "2") {
    //   // toggleDrawer("PASSWORD_ATTENDANCE_MODAL");
    // }

    // if (source.droppableId === "2" && destination.droppableId === "3") {
    //   // createNewAttendence(result);
    // }

    // if (source.droppableId === "2" && destination.droppableId === "1") {
    //   // logoutSeller(draggableId, storeId);
    // }

    handleIsDragging(false);
  };

  const handleQuestionSelected = (element) => {
    // setQuestionResultSelected
    console.log({ element });
  };

  const handleIsDragging = (value) => (isDraggingRef.current = value);

  const handlePasswordSubmit = async (values) => {
    try {
      goingOn();
      handleClosePasswordModal();
    } catch (error) {
      console.log({ error });
      setIsPasswordValid(false);
      setTimeout(() => {
        setIsPasswordValid(true);
        setInputs(["", "", "", ""]);
      }, 3000);
    }
  };

  const removeItemById = (id, array) => {
    return array.filter((item) => item.seller_id != id);
  };

  const reorderList = (result) => {
    const { destination, source } = result;

    let newList;

    switch (destination.droppableId) {
      case "1":
        newList = reorderSellers(destination, source, sellers);
        setSellers(newList);
        break;
      case "2":
        newList = reorderSellers(destination, source, freeSellers);
        setFreeSellers(newList);
        break;
      case "3":
        newList = reorderSellers(destination, source, inAttendanceSellers);
        setInAttendanceSellers(newList);
        break;
    }
  };

  const reorderSellers = (destination, source, list) => {
    // Copiamos el array original para no mutarlo
    const updatedItems = [...list];

    // Remover el elemento arrastrado del array
    const [movedItem] = updatedItems.splice(source.index, 1);

    // Insertar el elemento arrastrado en la nueva posición
    updatedItems.splice(destination.index, 0, movedItem);

    return updatedItems;
  };

  const setNewState = (destinationDroppableId, seller) => {
    let updatedSeller;
    switch (destinationDroppableId) {
      case "1": // TO DO
        updatedSeller = { ...seller };
        setSellers([...sellers, updatedSeller]);
        break;
      case "2": // DONE
        updatedSeller = { ...seller };
        setFreeSellers([...freeSellers, updatedSeller]);
        break;
      case "3": // IN REVIEW
        updatedSeller = { ...seller };
        setInAttendanceSellers([...inAttendanceSellers, updatedSeller]);
        break;
    }
  };

  const toggleDrawer = (name) => {
    setDrawer(name);
  };

  return (
    <>
      <main className="relative flex w-full max-w-screen-xl_custom_3 flex-col items-center justify-center bg-secondary-thin pb-4 lg_custom_2:items-center xl:max-w-screen-xl">
        <DragDropContext
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
        >
          <div
            className="z-5 bottom-3 flex w-full flex-col rounded-lg border  bg-white text-center md:w-[93%] "
            style={{
              height: "calc(100vh - 100px)",
              // maxHeight: "calc(100vh - 130px)",
              boxShadow: "0px 15px 20px -20px #0000002B",
            }}
          >
            <div className="flex h-full flex-col">
              <div className="flex min-h-[54px] items-center justify-between rounded-t-[8px] bg-white px-4">
                <p className="text-[24px] font-normal leading-[22px] text-secondary">
                  Sales Service
                </p>
              </div>
              <section className="flex h-full max-h-full grid-cols-12 flex-col gap-2 rounded-lg p-3 md:grid md:[flex-flow:initial]">
                <div
                  className="col-span-2 rounded-lg border border-[#F0F0F0]"
                  style={{
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div className="rounded-t-lg border-b border-[#F0F0F0] bg-white">
                    <span className="flex justify-start p-3 text-sm font-bold uppercase leading-[22px] text-[#666767]">
                      Sellers
                    </span>
                  </div>
                  <Droppable droppableId={"1"}>
                    {(provided, snapshot) => (
                      <ul
                        className={`flex flex-col gap-4 overflow-x-hidden overflow-y-scroll rounded-b-lg border-[2px] border-transparent px-4 pb-4 pt-8 ${snapshot.isDraggingOver ? "border-[#D9D9D9]" : ""
                          }`}
                        style={{
                          height: "calc(100% - 100px)",
                          minHeight: "387px",
                        }}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {sellers.map((seller, index) => (
                          <Draggable
                            draggableId={seller.seller_id.toString()}
                            index={index}
                            key={seller.seller_id}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div
                                  className={`flex flex-col items-center gap-2 `}
                                >
                                  <img
                                    src={seller.avatar}
                                    alt="image"
                                    className="h-[52px] w-[52px] rounded-full"
                                  />
                                  <span className="text-center text-base font-bold leading-[22px] text-[#666767]">
                                    {seller.user_name ?? seller.user_full_name}
                                  </span>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </ul>
                    )}
                  </Droppable>
                </div>
                <div
                  className="col-span-5 rounded-lg border border-[#F0F0F0]"
                  style={{
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div className="rounded-t-lg bg-white border-b border-[#F0F0F0]">
                    <span className="flex justify-start p-3 text-sm font-bold uppercase leading-[22px] text-[#666767]">
                      Turn List
                    </span>
                  </div>
                  <Droppable droppableId={"2"}>
                    {(provided, snapshot) => (
                      <ul
                        className={`flex flex-col gap-4 overflow-x-hidden overflow-y-scroll border-[2px] border-transparent px-4 pb-4 pt-8 ${snapshot.isDraggingOver
                          ? "border-[#D9D9D9] bg-secondary-thin"
                          : ""
                          }`}
                        style={{
                          height: "calc(100% - 100px)",
                        }}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {freeSellers.map((seller, index) => (
                          <Draggable
                            draggableId={seller.seller_id.toString()}
                            key={seller.seller_id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <div className="flex items-center gap-4 border-b py-4">
                                  <img
                                    src={seller.avatar}
                                    alt="image"
                                    className="h-[52px] w-[52px] rounded-full"
                                  />

                                  <span className="text-center text-base font-bold leading-[22px] text-[#666767]">
                                    {seller.user_name ?? seller.user_full_name}
                                  </span>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </ul>
                    )}
                  </Droppable>
                </div>
                <div
                  className="col-span-5 rounded-lg border border-[#F0F0F0]"
                  style={{
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div className="rounded-t-lg bg-white border-b border-[#F0F0F0]">
                    <span className="flex justify-start p-3 text-sm font-bold uppercase leading-[22px] text-[#666767]">
                      In Service
                    </span>
                  </div>
                  <Droppable droppableId={"3"}>
                    {(provided, snapshot) => (
                      <ul
                        className={`flex flex-col gap-4 overflow-x-hidden overflow-y-scroll border-[2px] border-transparent px-4 pb-4 pt-8 ${snapshot.isDraggingOver
                          ? "border-[#D9D9D9] bg-secondary-thin"
                          : ""
                          }`}
                        style={{
                          height: "calc(100% - 100px)",
                        }}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {inAttendanceSellers.map((seller, index) => (
                          <Draggable
                            draggableId={seller.seller_id.toString()}
                            key={seller.seller_id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <div className="flex items-center gap-4 border-b py-4">
                                  <img
                                    src={seller.avatar}
                                    alt="image"
                                    className="h-[52px] w-[52px] rounded-full"
                                  />
                                  <span className="text-center text-base font-bold leading-[22px] text-[#666767]">
                                    {seller.user_name ?? seller.user_full_name}
                                  </span>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </ul>
                    )}
                  </Droppable>
                </div>
              </section>
            </div>
          </div>
        </DragDropContext>
      </main>
      {isOpenPasswordAttendanceModal && (
        <PasswordAttendanceModal
          handleClose={handleClosePasswordModal}
          isPasswordValid={isPasswordValid}
          handleChangePassword={handleChangePassword}
          inputs={inputs}
          handleButtonPasswordClick={handleButtonPasswordClick}
        />
      )}

      {isOpenClosingAttendanceModal && (
        <ClosingAttendanceModal
          handleClose={() => toggleDrawer(null)}
          onSubmit={handleCloseAttendence}
          allQuestions={allQuestions}
          handleQuestionSelected={handleQuestionSelected}
          titleQuestion={"Closing of service"}
        />
      )}
    </>
  );
}

export default App;
