import { useRef } from "react";
import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import PasswordAttendanceModal from "./components/passwordModal";
import ClosingAttendanceModal from "./components/clossingAttendanceModal";

import { FaTag } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const sellersList = [
  {
    seller_id: 1383,
    user_full_name: "Bianca Lima Nascimento",
    store_name: "Moema",
    store_id: 4,
    avatar:
      "https://livo-pos.s3.us-east-2.amazonaws.com/formula/formula_bq2d_20241004224033.jpg",
    serve_free: true,
  },
  {
    seller_id: 484,
    user_full_name: "Liliane Emily Da Silva Cardoso",
    store_name: "Moema",
    store_id: 4,
    avatar:
      "https://livo-pos.s3.us-east-2.amazonaws.com/formula/formula_enRe_20241008020258.jpg",
    serve_free: true,
  },
  {
    seller_id: 668,
    user_full_name: "Yasmin Ferreira Da Silva",
    store_name: "Moema",
    store_id: 4,
    avatar:
      "https://livo-pos.s3.us-east-2.amazonaws.com/formula/formula_enRe_20241008020115.jpg",
    serve_free: true,
  },
  {
    seller_id: 590,
    user_full_name: "Bruna Albs Passos",
    store_name: "Moema",
    store_id: 4,
    avatar:
      "https://livo-pos.s3.us-east-2.amazonaws.com/formula/formula_bq2d_20241004224033.jpg",
    serve_free: true,
  },
  {
    seller_id: 1906,
    user_full_name: "Bruno Atendimento",
    store_name: "Moema",
    store_id: 4,
    avatar:
      "https://livo-pos.s3.us-east-2.amazonaws.com/formula/formula_ep2b_20250113143650.jpg",
    serve_free: true,
  },
];

const allQuestions = [
  {
    pack_test_id: 153,
    store_id: 4,
    question: {
      id: 1667,
      question: "PREÇO",
      label: "PREÇO",
      active: true,
      icon: <FaTag />,
      order: 2,
      options: [
        {
          id: 3891,
          label: "CARTÃO NÃO APROVADO",
          value: "True",
          type: "",
          order: 1,
          question: 1667,
        },
        {
          id: 3892,
          label: "NECESSITA DE MAIOR QUANTIDADE DE PARCELAS",
          value: "True",
          type: "",
          order: 2,
          question: 1667,
        },
      ],
      subquestions: [
        {
          id: 1668,
          question: "LENTES",
          label: "LENTES",
          active: true,
          img_class: "",
          order: 1,
          options: [
            {
              id: 3893,
              label: "CONCORRENTE OFERECEU MENOR PREÇO",
              value: "True",
              type: "",
              order: 1,
              question: 1668,
            },
            {
              id: 3894,
              label: "PROCURAVA LENTES ATÉ R$ 200,00",
              value: "True",
              type: "",
              order: 2,
              question: 1668,
            },
            {
              id: 3895,
              label: "PROCURAVA LENTES ATÉ R$ 500,00",
              value: "True",
              type: "",
              order: 3,
              question: 1668,
            },
          ],
          subquestions: [],
        },
        {
          id: 1669,
          question: "ÓCULOS",
          label: "ÓCULOS",
          active: true,
          img_class: "",
          order: 2,
          options: [
            {
              id: 3896,
              label: "PROCURAVA ÓCULOS ATÉ R$ 200,00",
              value: "True",
              type: "",
              order: 1,
              question: 1669,
            },
            {
              id: 3897,
              label: "PROCURAVA ÓCULOS ATÉ R$ 300,00",
              value: "True",
              type: "",
              order: 2,
              question: 1669,
            },
            {
              id: 3898,
              label: "PROCURAVA ÓCULOS ATÉ R$ 500,00",
              value: "True",
              type: "",
              order: 3,
              question: 1669,
            },
          ],
          subquestions: [],
        },
      ],
    },
  },
  {
    pack_test_id: 154,
    store_id: 4,
    question: {
      id: 1670,
      question: "RESERVA",
      label: "RESERVA",
      active: true,
      icon: FaCalendarAlt,
      order: 3,
      options: [],
      subquestions: [
        {
          id: 1671,
          question: "RESERVA GRAU",
          label: "RESERVA GRAU",
          active: true,
          img_class: "",
          order: 1,
          options: [
            {
              id: 3899,
              label: "COMPROU SIM",
              value: "True",
              type: "",
              order: 1,
              question: 1671,
            },
            {
              id: 3900,
              label: "COMPROU NÃO",
              value: "True",
              type: "",
              order: 2,
              question: 1671,
            },
          ],
          subquestions: [],
        },
        {
          id: 1672,
          question: "RESERVA SOLAR",
          label: "RESERVA SOLAR",
          active: true,
          img_class: "",
          order: 2,
          options: [
            {
              id: 3901,
              label: "COMPROU SIM",
              value: "True",
              type: "",
              order: 1,
              question: 1672,
            },
            {
              id: 3902,
              label: "COMPROU NÃO",
              value: "True",
              type: "",
              order: 2,
              question: 1672,
            },
          ],
          subquestions: [],
        },
        {
          id: 1673,
          question: "RESERVA ORÇAMENTO",
          label: "RESERVA ORÇAMENTO",
          active: true,
          img_class: "",
          order: 3,
          options: [
            {
              id: 3903,
              label: "COMPROU SIM",
              value: "True",
              type: "",
              order: 1,
              question: 1673,
            },
            {
              id: 3904,
              label: "COMPROU NÃO",
              value: "True",
              type: "",
              order: 2,
              question: 1673,
            },
          ],
          subquestions: [],
        },
      ],
    },
  },
  {
    pack_test_id: 155,
    store_id: 4,
    question: {
      id: 1674,
      question: "MANUTENÇÃO",
      label: "MANUTENÇÃO",
      active: true,
      icon: <FaWrench />,
      order: 4,
      options: [],
      subquestions: [
        {
          id: 1675,
          question: "ARMAÇÃO LIVO",
          label: "ARMAÇÃO LIVO",
          active: true,
          img_class: "",
          order: 1,
          options: [
            {
              id: 3905,
              label: "SIM",
              value: "True",
              type: "",
              order: 1,
              question: 1675,
            },
            {
              id: 3906,
              label: "NÃO",
              value: "True",
              type: "",
              order: 2,
              question: 1675,
            },
          ],
          subquestions: [],
        },
      ],
    },
  },
  {
    pack_test_id: 156,
    store_id: 4,
    question: {
      id: 1676,
      question: "NÃO POSSUÍMOS MODELO DE LENTE",
      label: "NÃO POSSUÍMOS MODELO DE LENTE",
      active: true,
      icon: <FaEyeSlash />,
      order: 5,
      options: [
        {
          id: 3911,
          label: "LENTE ESPELHADA",
          value: "True",
          type: "",
          order: 1,
          question: 1676,
        },
        {
          id: 3912,
          label: "POLARIZADA",
          value: "True",
          type: "",
          order: 2,
          question: 1676,
        },
        {
          id: 3913,
          label: "BIFOCAL",
          value: "True",
          type: "",
          order: 3,
          question: 1676,
        },
      ],
      subquestions: [
        {
          id: 1677,
          question: "MARCA",
          label: "MARCA",
          active: true,
          img_class: "",
          order: 1,
          options: [
            {
              id: 3907,
              label: "RODENSTOCK",
              value: "True",
              type: "",
              order: 1,
              question: 1677,
            },
            {
              id: 3908,
              label: "HOYA",
              value: "True",
              type: "",
              order: 2,
              question: 1677,
            },
            {
              id: 3909,
              label: "ZHETTA",
              value: "True",
              type: "",
              order: 3,
              question: 1677,
            },
          ],
          subquestions: [
            {
              id: 1678,
              question: "OUTROS",
              label: "OUTROS",
              active: true,
              img_class: "",
              order: 1,
              options: [
                {
                  id: 3910,
                  label: "QUAL MARCA?",
                  value: "True",
                  type: "input",
                  order: 1,
                  question: 1678,
                },
              ],
              subquestions: [],
            },
          ],
        },
      ],
    },
  },
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

  const getFormattedDate = () => {
    const date = new Date();

    const days = ["Mon.", "Thu.", "Wed.", "Tue.", "Fri.", "Sat.", "Sun."];
    const dayOfWeek = days[date.getDay()];

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${dayOfWeek} ${day} / ${month} / ${year}`;
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

    if (source.droppableId === "1" && destination.droppableId === "2") {
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
            className="z-5 bottom-3 flex w-full flex-col rounded-2xl border  bg-white text-center md:w-[93%] "
            style={{
              height: "calc(100vh - 100px)",
              // maxHeight: "calc(100vh - 130px)",
              boxShadow: "0px 15px 20px -20px #0000002B",
            }}
          >
            <div className="flex h-full flex-col">
              <div className="flex min-h-[54px] items-center justify-between rounded-t-[16px] bg-[#E8EFF3] px-4">
                <p className="text-[24px] font-bold leading-[22px] text-[#666767]">
                  {getFormattedDate()}
                </p>
              </div>
              <section className="flex h-full max-h-full grid-cols-12 flex-col gap-2 rounded-2xl p-3 md:grid md:[flex-flow:initial]">
                <div
                  className="col-span-2 rounded-2xl border border-[#F0F0F0]"
                  style={{
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div className="rounded-t-2xl border border-[#F0F0F0] bg-white">
                    <span className="flex justify-start p-3 text-sm font-bold uppercase leading-[22px] text-[#666767]">
                      Sellers
                    </span>
                  </div>
                  <Droppable droppableId={"1"}>
                    {(provided, snapshot) => (
                      <ul
                        className={`flex flex-col gap-4 overflow-x-hidden overflow-y-scroll rounded-b-2xl border-[2px] border-transparent bg-[#F0F0F0] px-4 pb-4 pt-8 ${
                          snapshot.isDraggingOver ? "border-[#D9D9D9]" : ""
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
                  className="col-span-5 rounded-2xl border border-[#F0F0F0]"
                  style={{
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div className="rounded-t-2xl bg-[#E8EFF3]">
                    <span className="flex justify-start p-3 text-sm font-bold uppercase leading-[22px] text-[#666767]">
                      Turn List
                    </span>
                  </div>
                  <Droppable droppableId={"2"}>
                    {(provided, snapshot) => (
                      <ul
                        className={`flex flex-col gap-4 overflow-x-hidden overflow-y-scroll border-[2px] border-transparent px-4 pb-4 pt-8 ${
                          snapshot.isDraggingOver
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
                  className="col-span-5 rounded-2xl border border-[#F0F0F0]"
                  style={{
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div className="rounded-t-2xl bg-[#E8EFF3]">
                    <span className="flex justify-start p-3 text-sm font-bold uppercase leading-[22px] text-[#666767]">
                      In Service
                    </span>
                  </div>
                  <Droppable droppableId={"3"}>
                    {(provided, snapshot) => (
                      <ul
                        className={`flex flex-col gap-4 overflow-x-hidden overflow-y-scroll border-[2px] border-transparent px-4 pb-4 pt-8 ${
                          snapshot.isDraggingOver
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
          titleQuestion={"Fechamento de atendimento"}
        />
      )}
    </>
  );
}

export default App;
